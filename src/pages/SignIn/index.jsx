import React, { useState } from "react";
import { Brand } from "../../components/Brand";
import { Container, Content, Form } from "./styles";
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

  // Função para realizar o login
  function handleSignIn() {
    if (!email || !password) {
      return alert("Por favor preencha todos os campos!");
    }
    signIn({ email, password })
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        // Lida com erros de autenticação
        alert("Falha no login, verifique suas credenciais!");
      });
  }

  return (
    <Container>
      <Content>
        <Brand logo={logoCustumer} />
        <Form>
          <h1>Faça o login</h1>
          <Input
            isuser="true"
            label="Email"
            autoComplete="username"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            isuser="true"
            label="Senha"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonRed
            title="Entrar"
            onClick={handleSignIn}
          />
          <Link to="/register">Criar conta</Link>
        </Form>
      </Content>
    </Container>
  );
}
