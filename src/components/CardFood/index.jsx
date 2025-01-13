import { Container, Content, Description, PhotoFood } from "./styles";
import formatCentsValue from "../../utils/formatCentsValue";
import { useNavigate } from "react-router-dom";
import { QuantityController } from "../QuantityControllerAddtoCart"; // Certifique-se de exportar corretamente o QuantityController
import { USER_ROLE } from "../../utils/roles";

export const CardFood = ({ role, title, price, description, imageUrl, id, ...rest }) => {
  const navigate = useNavigate();
  const foodImageUrl = `https://explorerfood-projeto-final-api.onrender.com/files/${imageUrl}`;

  const handleFoodDescription = () => navigate(`/foods-details/${id}`);
  const handleFoodDetails = () => navigate(`/edit-food/${id}`);

  // Componente de Loading simplificado, caso seja necessário
  if (!title) {
    return <div>Carregando...</div>;
  }

  return (
    <Container {...rest}>
      <Content>
        <PhotoFood>
          <img
            className="photo-food"
            src={foodImageUrl}
            alt="foto do alimento"
            onClick={handleFoodDescription}
            loading="lazy"
          />
          {role === USER_ROLE.ADMIN && (
            <img
              className="icon-pencil"
              src="/assets/icons/Pencil.svg"
              alt="Ícone de lápis, clique para editar prato"
              onClick={handleFoodDetails}
              loading="lazy"
            />
          )}
          {role === USER_ROLE.CUSTOMER && (
            <img
              className="icon-like"
              src="/assets/icons/Heart.svg"
              alt={`foto do ${title}`}
              loading="lazy"
            />
          )}
        </PhotoFood>
        <Description>
          <h1>{title}</h1>
          <p>{description}</p>
        </Description>
        <p className="price-item">{formatCentsValue(price)}</p>
      </Content>
      {role === USER_ROLE.CUSTOMER && <QuantityController />}
    </Container>
  );
};
