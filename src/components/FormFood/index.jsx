import React from "react";
import { Container, FileImageFood, InputCategory, InputIngredients, InputNameFood } from "./styles";
import { IngredientItem } from "../IngredientItem";

export const FormFood = () => {
  return (
    <Container>
      <h1>Editar prato</h1>

      <FileImageFood>
        <p className="label-title">Imagem do produto</p>
        <label
          htmlFor="file-upload"
          className="custom-file-upload"
        >
          <img
            src="/assets/icons/UploadSimple.svg"
            alt=""
            className="custom-label-image"
          />
          <input
            type="file"
            id="file-upload"
          />
          Selecione imagem
        </label>
        <span id="file-name"></span>
      </FileImageFood>
      <InputNameFood>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Salada Ceasar"
        />
      </InputNameFood>

      <InputCategory>
        <label
          className="select"
          htmlFor="category"
        >
          Categoria
        </label>

        <select
          name="categories"
          id="category"
        >
          <option value="">--Categorias--</option>
          <option value="meal">Refeição</option>
          <option value="dessert">Sobremesas</option>
          <option value="drink">Bebidas</option>
        </select>
      </InputCategory>
      <InputIngredients>
        <IngredientItem
          placeholder="Novo Link"
          isNew={false}
          value="Pão Naan"
          onChange={(e) => console.log(e)}
          onClick={() => console.log("handleAddLink")}
        />
        <IngredientItem
          placeholder="Novo Link"
          isNew={true}
          value="{newLink}"
          onChange={(e) => console.log(e)}
          onClick={() => console.log("handleAddLink")}
        />
      </InputIngredients>
    </Container>
  );
};
