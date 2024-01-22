import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Section } from "../../components/Section";
import { CardFood } from "../../components/CardFood";
import { api } from "../../services/api";

export const Home = () => {
  const { foods, setFoods } = useState([]);
  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get("/foods");
      setFoods(response.data);
    }
    fetchFoods();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Section title="Refeição">
          {foods &&
            foods.map((food) => (
              <CardFood
                key={String(food.id)}
                title={foods.name}
              />
            ))}
        </Section>
        <Section title="Sobremesas">
          <CardFood />
        </Section>
        <Section title="Bebidas">
          <CardFood />
        </Section>
      </Container>
    </>
  );
};
