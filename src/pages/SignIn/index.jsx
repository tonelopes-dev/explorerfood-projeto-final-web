import React, { useState } from "react";
import { Brand } from "../../components/Brand";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { ButtonRed } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../../hooks/auth";

const logoCustumer = "/assets/icons/logo.png";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = userAuth();

  const navigate = useNavigate();

  function handleSingIn() {
    if (!email || !password) {
      return alert("Por favor preencha todos os campos!");
    }
    navigate("/");
    signIn({ email, password });
  }
  return (
    <Container>
      <Brand logo={logoCustumer} />
      <div>
        <Form>
          <h1>Faça o login</h1>

          <Input
            isuser={true.toString()}
            label="Email"
            autoComplete="username"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            isuser={true.toString()}
            label="Senha"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonRed
            title="Entrar"
            onClick={handleSingIn}
          />
        </Form>
        <Link to="/register">Criar conta</Link>
      </div>
    </Container>
  );
}
