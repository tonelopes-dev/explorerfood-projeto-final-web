import React from "react";
import { CardFood } from "../CardFood";
import { Container } from "./styled";

export const Section = ({ title }) => {
  return (
    <Container>
      <p className="title">{title}</p>
      <CardFood />
    </Container>
  );
};
