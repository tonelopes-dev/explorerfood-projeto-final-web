import React from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const Brand = () => {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <Container onClick={() => handleBack()}>
      <img
        src="/assets/icons/logo.png"
        alt="logo food expolorer"
      />
    </Container>
  );
};
