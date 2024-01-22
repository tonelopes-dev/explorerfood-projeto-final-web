import React from "react";
import { AmountFood, Container, Description, PhotoFood } from "./styled";
import { ButtonRed } from "../Button";

export const CardFood = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <PhotoFood>
        <img
          className="photo-food"
          src={data.url_image}
          alt="foto do alimento"
        />
        <img
          className="icon-like"
          src="./src/assets/icons/Heart.svg"
          alt="icone do coração"
        />
      </PhotoFood>
      <Description>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </Description>

      <p className="price-item">R$ 79,97</p>
      <AmountFood>
        <div className="options">
          <button className="button-options">
            <img
              src="./src/assets/icons/Minus.svg"
              alt=""
            />
          </button>
          <span>01</span>
          <button className="button-options">
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

{
  /* <Container {...rest}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag
              key={tag.id}
              title={tag.name}
            />
          ))}
        </footer>
      )}
    </Container>
  ); */
}
