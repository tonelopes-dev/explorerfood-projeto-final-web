import { BrowserRouter } from "react-router-dom";

import { useEffect } from "react";
import { api } from "../services/api";

import { userAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";
import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user, signOut } = userAuth();

  /* useEffect(() => {
    async function fetchLogin() {
      await api.get("/users/validated").catch((error) => {
        if (error.response?.status === 401) {
          signOut();
        }
      });
    }
    fetchLogin();
  }, []); */

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  return <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>;
}
