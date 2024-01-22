import React from "react";
import { Container } from "./styles";

export const ButtonRed = ({ title, icon: Icon, ...rest }) => {
  return (
    <Container
      type="button"
      {...rest}
    >
      {Icon && (
        <img
          src={Icon}
          alt=""
        />
      )}
      {title}
    </Container>
  );
};
