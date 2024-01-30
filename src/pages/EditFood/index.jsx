import { useParams, useNavigate } from "react-router-dom";
import {
  ButtonBack,
  Container,
  Content,
  FileImageFood,
  InputCategory,
  InputDescription,
  InputIngredients,
  InputNameFood,
} from "./styles";
import { Header } from "../../components/Header";
import { IngredientItem } from "../../components/IngredientItem";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Footer } from "../../components/Footer";
import { userAuth } from "../../hooks/auth";

export const EditFood = () => {
  const [data, setData] = useState(null);
  const [titleFood, setTitleFood] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");

  const [ingredientsName, setIngredientsName] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const { user } = userAuth();

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
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
      setIngredientsList(response.data.ingredients);
      setSelectedCategory(response.data.category);
      setDescription(response.data.description);
    }

    fetchFood();
  }, [params.id]);

  if (!data) {
    return <div>Carregando...</div>; // Ou qualquer outra representação de loading
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

          <label htmlFor="ingredients">Ingredientes</label>
          <InputIngredients>
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
          </InputIngredients>
          <InputDescription>
            <label htmlFor="description">Descrição</label>
            <textarea
              value={description}
              name=""
              id=""
              cols="100"
              rows="100"
            ></textarea>
          </InputDescription>
        </Content>
        <Footer />
      </Container>
    </>
  );
};
