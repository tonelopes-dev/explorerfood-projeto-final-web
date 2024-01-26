import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { FoodDetails } from "../pages/FoodDetails";

export const CustomerRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/foods-details/:id"
        element={<FoodDetails />}
      />

      <Route
        path="*"
        exact={true}
        element={<NotFound />}
      />
    </Routes>
  );
};
