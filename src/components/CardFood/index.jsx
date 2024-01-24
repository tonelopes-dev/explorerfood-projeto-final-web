import React, { useState } from "react";
import { ButtonRed } from "../Button";
import { AmountFood, Container, Description, PhotoFood } from "./styles";

export const CardFood = ({ title, price, description, imageUrl, ...rest }) => {
  const foodImageUrl = `http://localhost:3333/files/${imageUrl}`;
  const [amount, setAmount] = useState(1);

  function handleAmountFood(amountFood) {
    setAmount((prevState) => prevState + amountFood);
  }
  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  if (!title) {
    return <div>Loading...{title}</div>;
  }
  return (
    <Container {...rest}>
      <PhotoFood>
        <img
          className="photo-food"
          src={foodImageUrl}
          alt="foto do alimento"
        />
        <img
          className="icon-like"
          src="./src/assets/icons/Heart.svg"
          alt={`foto do ${title}`}
        />
      </PhotoFood>
      <Description>
        <h1>{title ? title : "Loading..."}</h1>
        <p>{description}</p>
      </Description>

      <p className="price-item">{price}</p>
      <AmountFood>
        <div className="options">
          <button className="button-options">
            <img
              src="./src/assets/icons/Minus.svg"
              alt=""
            />
          </button>
          <span>{formatNumber(amount)}</span>

          <button
            className="button-options"
            onClick={() => handleAmountFood(1)}
          >
            <img
              src="./src/assets/icons/Plus.svg"
              alt=""
            />
          </button>
        </div>
        <ButtonRed title="incluir" />
      </AmountFood>
    </Container>
  );
};
