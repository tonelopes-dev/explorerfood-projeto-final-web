import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ButtonBack,
  Buttons,
  Container,
  Content,
  InputCategory,
  InputDescription,
  InputIngredients,
  InputNameFood,
  InputPrice,
  Image,
  ImageContainer,
  ContainerLoading,
} from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonRed } from "../../components/Button";
import { IngredientItem } from "../../components/IngredientItem";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Camera } from "lucide-react";

export const EditFood = () => {
  const [data, setData] = useState(null);
  const [titleFood, setTitleFood] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);

  const [ingredientsName, setIngredientsName] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const { user, updateProduct } = useAuth();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.url_image}`;
  const [imageFood, setImageFood] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  function handleChangeImageFood(event) {
    const file = event.target.files[0];
    if (file) {
      setImageFood(file);

      // Criar URL para preview da imagem
      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
    }
  }

  function handleAddIngredient() {
    setIngredientsName((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
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

    return formattedPrice;
  }

  function convertStringToNumber(inputString) {
    if (typeof inputString === "string") {
      // Remove espaços e substitui vírgulas por pontos
      let cleanedString = inputString.replace(/\s/g, "").replace(/,/g, ".");

      // Converte para número
      let number = parseFloat(cleanedString);

      // Multiplica por 100 para converter para centavos e arredonda para evitar problemas de precisão
      return isNaN(number) ? 0 : Math.round(number * 100);
    }
    return 0;
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  function handleBack() {
    navigate("/");
  }
  async function handleUpdateProduct() {
    const priceInCents = convertStringToNumber(price);
    if (!titleFood || !selectedCategory || !description || !ingredientsName || !priceInCents || !user.id) {
      return alert("Todos os campos são obrigatórios.");
    }
    const updated = {
      title: titleFood,
      category: selectedCategory,
      description,
      ingredients: ingredientsName,
      price: priceInCents,
      user_id: user.id,
    };
    const productUpdated = Object.assign(data, updated);

    await updateProduct({ food: productUpdated, imageFoodFile: imageFood });
    navigate(`/foods-details/${params.id}`);
  }
  async function handleDeleteProduct() {
    await api.delete(`/foods/${params.id}`);
    alert("Produto deletado!");
    navigate("/");
  }

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
      setImageFood(response.data.image);
      setTitleFood(response.data.title);
      setIngredientsList(response.data.ingredients);
      setPrice(formatPrice(response.data.price));
      setSelectedCategory(response.data.category);
      setDescription(response.data.description);
    }

    fetchFood();
  }, [params.id]);

  if (!data) {
    return (
      <ContainerLoading className="loading">
        <h1>Carregando...</h1>
        <span className="loader"></span>
      </ContainerLoading>
    ); // Ou qualquer outra representação de loading
  }
  return (
    <>
      <Header user={user} />
      <Container>
        <Content>
          <ButtonBack onClick={() => handleBack()}>
            <img
              src="/assets/icons/CaretLeft.svg"
              alt=""
              loading="lazy"
            />{" "}
            voltar
          </ButtonBack>

          <h1>Editar prato</h1>

          <ImageContainer>
            <p className="label-title">Imagem do Prato</p>

            <Image>
              <img
                src={previewImage || imageURL} // Exibe a imagem do preview ou a imagem existente
                alt="Foto do prato"
              />
              <label htmlFor="image">
                <input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChangeImageFood} // Atualiza o preview ao selecionar nova imagem
                />
                <Camera size={24} />
              </label>
            </Image>
          </ImageContainer>

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
              <option
                value="default"
                // eslint-disable-next-line react/no-unknown-property
                desabled="true"
              >
                --Categorias--
              </option>
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
                id="ingredients"
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
                id="price"
                value={price}
                placeholder="79,00"
                onChange={(e) => setPrice(e.target.value.trim())}
              />
            </div>
          </InputPrice>

          <InputDescription>
            <label htmlFor="description">Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name=""
              id="description"
              cols="100"
              rows="100"
            ></textarea>
          </InputDescription>
          <Buttons>
            <div className="content">
              {" "}
              <ButtonRed
                className="button-delete"
                title="Excluir prato"
                onClick={handleDeleteProduct}
              />
              <ButtonRed
                className="button-updated"
                title="Salvar alterações"
                onClick={handleUpdateProduct}
              />
            </div>
          </Buttons>
        </Content>
        <Footer />
      </Container>
    </>
  );
};
