import React, { useState } from "react";
import { Container } from "./styles";
import { ButtonRed } from "../Button";

export const QuantityController = ({ value, showPrice, icon, title }) => {
  const [quantity, setQuantity] = useState(0);

  // Função para aumentar a quantidade
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Função para diminuir a quantidade
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  function formatNumber(number) {
    return String(number).padStart(2, "0");
  }

  return (
    <Container className="quantity-controller">
      <div className="options">
        <button
          className="button-options"
          onClick={() => decreaseQuantity(1)}
        >
          <img
            src="/assets/icons/Minus.svg"
            alt=""
            className="icon-options-quantity"
          />
        </button>
        <span className="quantaty">{formatNumber(quantity)}</span>

        <button
          className="button-options"
          onClick={() => increaseQuantity(1)}
        >
          <img
            src="/assets/icons/Plus.svg"
            alt=""
            className="icon-options-quantity"
          />
        </button>
      </div>
      <ButtonRed
        title={title}
        icon={icon}
        price={value}
        showPrice={showPrice}
        quantity={quantity}
      />
    </Container>
  );
};
