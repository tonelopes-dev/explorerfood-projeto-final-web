import { useParams, useNavigate } from "react-router-dom";
import { ButtonBack, Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";
import { api } from "../../services/api";

import { Footer } from "../../components/Footer";
import { userAuth } from "../../hooks/auth";

export const AddNewFood = () => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const { user } = userAuth();

  function handleBack() {
    navigate(-1);
  }

  /* if (!data) {
    return <div>Carregando...</div>; // Ou qualquer outra representação de loading
  } */

  return (
    <>
      <Header user={user} />
      <Container>
        <ButtonBack onClick={() => handleBack()}>
          <img
            src="/assets/icons/CaretLeft.svg"
            alt=""
          />{" "}
          voltar
        </ButtonBack>
        <Content></Content>
        <Footer />
      </Container>
    </>
  );
};
