import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Food } from "../pages/Food";

export const CustomerRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/foods/:id"
        element={<Food />}
      />
      <Route
        path="*"
        exact={true}
        element={<NotFound />}
      />
    </Routes>
  );
};
