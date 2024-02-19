import React from "react";

import { Container, Content, Description, PhotoFood } from "./styles";
import formatCentsValue from "../../utils/formatCentsValue";
import { useNavigate } from "react-router-dom";
import { QuantityController } from "../QuantityControllerAddtoCart";
import { USER_ROLE } from "../../utils/roles";

export const CardFood = ({ role, title, price, description, imageUrl, id, ...rest }) => {
  const foodImageUrl = `http://localhost:3333/files/${imageUrl}`;

  const navigate = useNavigate();

  function handleFoodDescription(id) {
    navigate(`/foods-details/${id}`);
  }
  function handleFoodDetails(id) {
    navigate(`/edit-food/${id}`);
  }

  if (!title) {
    return <div>Loading...{title}</div>;
  }
  return (
    <Container {...rest}>
      <Content>
        <PhotoFood>
          <img
            className="photo-food"
            src={foodImageUrl}
            alt="foto do alimento"
            onClick={() => handleFoodDescription(id)}
          />
          {[USER_ROLE.ADMIN].includes(role) && (
            <img
              className="icon-pencil"
              src="/assets/icons/Pencil.svg"
              alt={`icone do lapis, ao clicar encaminhar para a tela de editar prato`}
              onClick={() => handleFoodDetails(id)}
            />
          )}
          {[USER_ROLE.CUSTOMER].includes(role) && (
            <img
              className="icon-like"
              src="/assets/icons/Heart.svg"
              alt={`foto do ${title}`}
            />
          )}
        </PhotoFood>
        <Description>
          <h1>{title ? title : "Loading..."}</h1>
          <p>{description}</p>
        </Description>

        <p className="price-item">{formatCentsValue(price)}</p>
      </Content>
      {[USER_ROLE.CUSTOMER].includes(role) && <QuantityController />}
    </Container>
  );
};
