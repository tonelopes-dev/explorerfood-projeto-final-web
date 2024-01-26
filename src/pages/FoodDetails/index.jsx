import { useParams, useNavigate } from "react-router-dom";
import { ButtonBack, Container, Content, DetailsFood, FoodContainer, IngredientsFood, PhotoFood } from "./styles";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { QuantityController } from "../../components/QuantityControllerAddtoCart";
import { Footer } from "../../components/Footer";
import { userAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { ButtonRed } from "../../components/Button";

export const FoodDetails = () => {
  const { user } = userAuth();
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleEditFood(id) {
    navigate(`/edit-food/${id}`);
  }

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
      <Header user={user} />
      <Container>
        <ButtonBack onClick={() => handleBack()}>
          <img
            src="/assets/icons/CaretLeft.svg"
            alt=""
          />{" "}
          voltar
        </ButtonBack>
        <Content>
          <PhotoFood>
            <img
              src={foodImageUrl}
              alt={`imagem do ${data.title}`}
            />
          </PhotoFood>

          <FoodContainer>
            <DetailsFood>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <IngredientsFood>
                {data.ingredients.map((ingredient, index) => (
                  <span key={index}>{ingredient.name}</span>
                ))}
              </IngredientsFood>
              {[USER_ROLE.ADMIN].includes(user.role) ? (
                <div>
                  <ButtonRed
                    title="Editar prato"
                    onClick={() => handleEditFood(data.id)}
                  />
                </div>
              ) : (
                <QuantityController
                  showPrice
                  value={price}
                />
              )}
            </DetailsFood>
          </FoodContainer>
        </Content>
        <Footer />
      </Container>
    </>
  );
};
