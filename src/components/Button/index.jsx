import React from "react";
import { Container } from "./styles";
import formatCentsValue from "../../utils/formatCentsValue";

export const ButtonRed = ({ quantity, showPrice, price, title, icon: Icon, ...rest }) => {
  const total = quantity * price;
  const priceFormatted = formatCentsValue(Number(total));

  if (showPrice && quantity > 0) {
    return (
      <Container
        type="button"
        {...rest}
      >
        {Icon && (
          <img
            src={Icon}
            alt=""
          />
        )}
        {title} {priceFormatted}
      </Container>
    );
  }

  return (
    <Container
      type="button"
      {...rest}
    >
      {Icon && (
        <img
          src={Icon}
          alt=""
        />
      )}
      {title}
    </Container>
  );
};
