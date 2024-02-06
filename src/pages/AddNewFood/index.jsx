import { useNavigate } from "react-router-dom";
import {
  ButtonBack,
  Buttons,
  Container,
  Content,
  FileImageFood,
  InputCategory,
  InputDescription,
  InputIngredients,
  InputNameFood,
  InputPrice,
} from "./styles";
import { Header } from "../../components/Header";
import { IngredientItem } from "../../components/IngredientItem";
import { useState } from "react";
import { api } from "../../services/api";

import { Footer } from "../../components/Footer";
import { userAuth } from "../../hooks/auth";
import { ButtonRed } from "../../components/Button";

export const AddNewFood = () => {
  const [data, setData] = useState(null);
  const [imageFood, setImageFood] = useState(null);
  const [titleFood, setTitleFood] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [ingredientsName, setIngredientsName] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();
  const { user, addNewProduct } = userAuth();

  function handleChangeImageFood(event) {
    const file = event.target.files[0];
    setImageFood(file);
  }

  function handleAddIngredient() {
    setIngredientsName((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
    console.log(ingredientsName);
  }
  function handleRemoveIngredient(deleted) {
    setIngredientsName((prevState) => prevState.filter((ingredient) => ingredient !== deleted));
  }
  function setIngredientsList(data) {
    const ingredientNames = data.map((ingredient) => ingredient.name);
    setIngredientsName(ingredientNames);
  }
  function formatPrice(priceInCents) {
    const price = (priceInCents / 100).toFixed(2);
    const formattedPrice = price.replace(".", ",");
    console.log(formattedPrice); // Para verificar a saída formatada
    return formattedPrice;
  }

  function convertStringToNumber(inputString) {
    if (typeof inputString === "string") {
      let cleanedString = inputString.replace(/\s/g, "").replace(/,/g, ".");

      let number = parseFloat(cleanedString);

      return isNaN(number) ? 0 : Math.round(number * 100);
    }
    return 0;
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  function handleBack() {
    navigate(-1);
  }
  async function handleCreatNewProduct() {
    const priceInCents = convertStringToNumber(price);

    const food = {
      title: titleFood,
      category: selectedCategory,
      description,
      ingredients: ingredientsName,
      price: priceInCents,
      user_id: user.id,
    };

    try {
      const createdFoodId = await addNewProduct({ food, imageFoodFile: imageFood });

      navigate(`/foods-details/${createdFoodId}`);
    } catch (error) {
      console.error("Erro ao criar novo produto:", error);
    }
  }

  return (
    <>
      <Header user={user} />
      <Container>
        <ButtonBack onClick={() => handleBack()}>
          <img
            src="/assets/icons/CaretLeft.svg"
            alt=""
          />{" "}
          voltar
        </ButtonBack>

        <Content>
          <h1>Adicionar prato</h1>

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
                onChange={handleChangeImageFood}
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
              value={titleFood}
              onChange={(e) => setTitleFood(e.target.value)}
              placeholder="Nome do prato"
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
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">--Categorias--</option>
              <option value="meal">Refeição</option>
              <option value="dessert">Sobremesas</option>
              <option value="drink">Bebidas</option>
            </select>
          </InputCategory>

          <InputIngredients>
            <label htmlFor="ingredients">Ingredientes</label>
            <div className="container-ingredients ">
              {ingredientsName.map((ingredient, index) => (
                <IngredientItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => {
                    handleRemoveIngredient(ingredient);
                  }}
                />
              ))}

              <IngredientItem
                className="input-ingredient"
                placeholder="Adicionar"
                isNew
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </InputIngredients>
          <InputPrice>
            <label htmlFor="price">Preço</label>
            <div>
              <p>R$ </p>
              <input
                type="text"
                value={price}
                placeholder="79,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </InputPrice>

          <InputDescription>
            <label htmlFor="description">Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name=""
              id=""
              cols="100"
              rows="100"
            ></textarea>
          </InputDescription>
          <Buttons>
            <div className="content">
              <ButtonRed
                className="button-updated"
                title="Salvar alterações"
                onClick={handleCreatNewProduct}
              />
            </div>
          </Buttons>
        </Content>
        <Footer />
      </Container>
    </>
  );
};
