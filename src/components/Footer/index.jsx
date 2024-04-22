import React from "react";
import { Container, Content } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <img
          src="/assets/icons/logo-gray.png"
          alt=""
          loading="lazy"
        />
        <span>© 2023 - Todos os direitos reservados.</span>
      </Content>
    </Container>
  );
};
