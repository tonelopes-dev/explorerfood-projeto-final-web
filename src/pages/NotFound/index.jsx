import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export const NotFound = () => {
  return (
    <Container>
      <h1>Página Indisponível</h1>
      <Link to="/">Voltar para o início</Link>
    </Container>
  );
};
