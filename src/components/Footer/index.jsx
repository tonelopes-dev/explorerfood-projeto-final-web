import { Container, Content } from "./styles";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <img
          src="/assets/icons/logo-gray.png"
          alt=""
          loading="lazy"
        />
        <span>© {year} - Todos os direitos reservados.</span>
      </Content>
    </Container>
  );
};
