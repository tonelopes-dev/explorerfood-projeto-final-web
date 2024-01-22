import React from "react";
import { Container } from "./styles";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { ButtonRed } from "../Button";
import { SignOut } from "../SignOut";

export const Header = () => {
  return (
    <Container>
      <header>
        <Brand />
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon="./src/assets/icons/search.svg"
        />
        <div className="buttor-header">
          <ButtonRed
            icon="./src/assets/icons/Receipt.svg"
            title="Pedidos (0)"
          />
        </div>

        <SignOut />
      </header>
    </Container>
  );
};
