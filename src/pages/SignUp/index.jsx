import React, { useState } from "react";
import { Brand } from "../../components/Brand";
import { Container, Content, Form } from "./styles";
import { Input } from "../../components/Input";
import { ButtonRed } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
const logoCustumer = "/assets/icons/logo.png";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Por favor preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar!");
        }
      });
  }
  return (
    <Container>
      <Content>
        <Brand
          logo={logoCustumer}
          className=".logo"
        />
        <Form>
          <h1>Crie sua conta</h1>
          <Input
            isuser={true.toString()}
            label="Seu Nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            isuser={true.toString()}
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            isuser={true.toString()}
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonRed
            title="Criar conta"
            onClick={handleSingUp}
          />
          <Link to="/">Eu já tenho uma conta</Link>
        </Form>
      </Content>
    </Container>
  );
}
