import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { Header } from "../../components/Header";
import { Banner, Container, Section, TitleSection } from "./styles";

import { CardFood } from "../../components/CardFood";
import { api } from "../../services/api";
import { Footer } from "../../components/Footer";
import { userAuth } from "../../hooks/auth";

export const Home = () => {
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const { user } = userAuth();

  useEffect(() => {
    async function fetchFoods() {
      const meal = await api.get("/foods/?categoryFood=meal");
      setMeals(meal.data);
      const dessert = await api.get("/foods/?categoryFood=dessert");
      setDesserts(dessert.data);
      const drink = await api.get("/foods/?categoryFood=drink");
      setDrinks(drink.data);
      console.log(meal.data, dessert.data, drink.data);
    }

    fetchFoods();
  }, []);

  useEffect(() => {
    async function fetchFoodsOrIngredients() {
      const response = await api.get(
        `/foods/?foodName=${searchTerm}&ingredients=${searchTerm}&categoryFood=${searchTerm}`
      );

      setMeals(response.data);
      setDesserts(response.data);
      setDrinks(response.data);
    }
    fetchFoodsOrIngredients();
  }, [searchTerm]);

  return (
    <>
      <Header
        user={user}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Container>
        <Banner>
          <img
            src="/assets/banner/banner-food.png"
            alt=""
          />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        {meals.length > 0 && (
          <Section>
            <TitleSection>Refeições</TitleSection>

            <Swiper
              slidesPerView={3}
              spaceBetween={27}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {meals.map((meal) => {
                return (
                  <SwiperSlide key={meal.id}>
                    <CardFood
                      role={user.role}
                      id={meal.id}
                      title={meal.title}
                      description={meal.description}
                      price={meal.price}
                      imageUrl={meal.url_image}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Section>
        )}
        {desserts.length > 0 && (
          <Section>
            <TitleSection>Sobremesas</TitleSection>

            <Swiper
              slidesPerView={3}
              spaceBetween={27}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {desserts.map((dessert) => {
                return (
                  <SwiperSlide key={dessert.id}>
                    <CardFood
                      id={dessert.id}
                      role={user.role}
                      title={dessert.title}
                      description={dessert.description}
                      price={dessert.price}
                      imageUrl={dessert.url_image}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Section>
        )}
        {drinks.length > 0 && (
          <Section>
            <TitleSection>Bebidas</TitleSection>

            <Swiper
              slidesPerView={3}
              spaceBetween={27}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {drinks.map((drink) => {
                return (
                  <SwiperSlide key={drink.id}>
                    <CardFood
                      id={drink.id}
                      role={user.role}
                      title={drink.title}
                      description={drink.description}
                      price={drink.price}
                      imageUrl={drink.url_image}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Section>
        )}
        <Footer />
      </Container>
    </>
  );
};
