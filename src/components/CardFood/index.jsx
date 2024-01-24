import React from "react";

import { Container, Content, Description, PhotoFood } from "./styles";
import formatCentsValue from "../../utils/formatCentsValue";
import { useNavigate } from "react-router-dom";
import { QuantityController } from "../QuantityControllerAddtoCart";

export const CardFood = ({ title, price, description, imageUrl, id, ...rest }) => {
  const foodImageUrl = `http://localhost:3333/files/${imageUrl}`;
  // Estado para gerenciar a quantidade

  const navigate = useNavigate();

  function handleFoodDetails(id) {
    navigate(`/foods/${id}`);
  }

  if (!title) {
    return <div>Loading...{title}</div>;
  }
  return (
    <Container {...rest}>
      <Content onClick={() => handleFoodDetails(id)}>
        <PhotoFood>
          <img
            className="photo-food"
            src={foodImageUrl}
            alt="foto do alimento"
          />
          <img
            className="icon-like"
            src="/assets/icons/Heart.svg"
            alt={`foto do ${title}`}
          />
        </PhotoFood>
        <Description>
          <h1>{title ? title : "Loading..."}</h1>
          <p>{description}</p>
        </Description>

        <p className="price-item">{formatCentsValue(price)}</p>
      </Content>
      <QuantityController />
    </Container>
  );
};
