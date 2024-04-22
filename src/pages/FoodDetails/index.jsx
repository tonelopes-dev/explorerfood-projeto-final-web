import { useParams, useNavigate } from "react-router-dom";
import { Button, ButtonBack, Container, Content, DetailsFood, FoodContainer, IngredientsFood, PhotoFood } from "./styles";
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
  const [foodImageUrl, setFoodImageUrl] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  function handleEditFood(id) {
    navigate(`/edit-food/${id}`);
  }

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    let active = true; // Flag para verificar se o componente está montado
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);

      // Obtendo o conteúdo binário da imagem
      const imageResponse = await api.get(`/files/${response.data.url_image}`, { responseType: "blob" });
      const imageUrl = URL.createObjectURL(imageResponse.data);
      if (active) {
        setFoodImageUrl(imageUrl);
      }
    }

    fetchFood();
    // Função de limpeza que será chamada quando o componente for desmontado
    return () => {
      active = false; // Indica que o componente foi desmontado
      if (foodImageUrl) {
        URL.revokeObjectURL(foodImageUrl); // Libera a memória usada pela URL do blob
      }
    };
  }, [params.id]);

  if (!data) {
    return <div>Carregando...</div>; // Ou qualquer outra representação de loading
  }
  const price = Number(data.price);

  return (
    <>
      <Header user={user} />
      <Container>
        <ButtonBack onClick={() => handleBack()}>
          <img
            src="/assets/icons/CaretLeft.svg"
            alt=""
            loading="lazy"
          />{" "}
          voltar
        </ButtonBack>
        <Content>
          <PhotoFood>
            <img
              src={foodImageUrl}
              alt={`imagem do ${data.title}`}
              loading="lazy"
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
              <Button>
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
                    title="pedir"
                    icon="/assets/icons/Receipt.svg"
                    value={price}
                  />
                )}
              </Button>
            </DetailsFood>
          </FoodContainer>
        </Content>
      </Container>
      <Footer />
    </>
  );
};
