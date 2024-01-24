import { useParams, useNavigate } from "react-router-dom";
import { ButtonBack, Container, Content, DetailsFood, FoodContainer, IngredientsFood } from "./styles";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { QuantityController } from "../../components/QuantityControllerAddtoCart";

export const Food = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }

    fetchFood();
  }, [params.id]);
  if (!data) {
    return <div>Carregando...</div>; // Ou qualquer outra representação de loading
  }
  const foodImageUrl = `http://localhost:3333/files/${data.url_image}`;
  const price = Number(data.price);

  return (
    <>
      <Header />
      <Container>
        <ButtonBack onClick={() => handleBack()}>
          <img
            src="/assets/icons/CaretLeft.svg"
            alt=""
          />{" "}
          voltar
        </ButtonBack>
        <Content>
          <img
            src={foodImageUrl}
            alt={`imagem do ${data.title}`}
          />
          <FoodContainer>
            <DetailsFood>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <IngredientsFood>
                {data.ingredients.map((ingredient, index) => (
                  <span key={index}>{ingredient.name}</span>
                ))}
              </IngredientsFood>
              <QuantityController
                showPrice
                value={price}
              />
            </DetailsFood>
          </FoodContainer>
        </Content>
      </Container>
    </>
  );
};
