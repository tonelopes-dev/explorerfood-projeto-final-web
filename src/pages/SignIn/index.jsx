import { useState } from "react";
import { Brand } from "../../components/Brand";
import { Container, Content, Form } from "./styles";
import { Input } from "../../components/Input";
import { ButtonRed } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const logoCustumer = "/assets/icons/logo.png";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const navigate = useNavigate();

  // Função para realizar o login
  async function handleSignIn() {
    if (!email || !password) {
      return alert("Por favor preencha todos os campos!");
    }

    setLoading(true); // Ativa o estado de loading ao iniciar a requisição

    try {
      await signIn({ email, password });
      navigate("/"); // Redireciona após sucesso
    } catch (error) {
      alert("Falha no login, verifique suas credenciais!"); // Exibe alerta em caso de erro
    } finally {
      setLoading(false); // Desativa o estado de loading após a requisição
    }
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
            title={loading ? "Carregando..." : "Entrar"}
            loading={loading}
            onClick={handleSignIn}
            disabled={loading} // Desabilita o botão enquanto está carregando
          />
          <Link to="/register">Criar conta</Link>
        </Form>
      </Content>
    </Container>
  );
}
