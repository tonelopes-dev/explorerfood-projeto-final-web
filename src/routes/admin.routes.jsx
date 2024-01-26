import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { EditFood } from "../pages/EditFood";
import { AddNewFood } from "../pages/AddNewFood";
import { FoodDetails } from "../pages/FoodDetails";

export const AdminRoutes = () => {
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
        path="/edit-food/:id"
        element={<EditFood />}
      />
      <Route
        path="/add-new-food/"
        element={<AddNewFood />}
      />
      <Route
        path="*"
        exact={true}
        element={<NotFound />}
      />
    </Routes>
  );
};
