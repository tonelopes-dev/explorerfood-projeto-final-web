import React, { useState, useEffect } from "react";
import { Container } from "./styles";

const iconDelete = "/assets/icons/Close.svg";
const iconAdd = "/assets/icons/Plus.svg";

export function IngredientItem({ isNew = false, value, onClick, ...rest }) {
  const [inputWidth, setInputWidth] = useState("50px");

  useEffect(() => {
    updateInputWidth(value);
  }, [value]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    updateInputWidth(inputValue);
    if (rest.onChange) {
      rest.onChange(event);
    }
  };

  const updateInputWidth = (value) => {
    setInputWidth(`${(value.length + 1) * 10}px`); // O '8' aqui é um valor estimado para a largura de um caractere
  };

  return (
    <Container
      $isnew={isNew}
      $inputwidth={inputWidth}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        onChange={handleInputChange}
        {...rest}
      />
      <button
        onClick={onClick}
        type="button"
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? (
          <img
            src={iconAdd}
            alt=""
            loading="lazy"
          />
        ) : (
          <img
            src={iconDelete}
            alt=""
            loading="lazy"
          />
        )}
      </button>
    </Container>
  );
}
