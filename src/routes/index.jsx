import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { userAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";
import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user, signOut } = userAuth();

  useEffect(() => {
    // Esta função agora assume que a validação e manutenção da sessão são tratadas centralmente no AuthProvider
    if (!user) {
      signOut(); // Garante que o usuário seja redirecionado para o login se não estiver autenticado
    }
  }, [user, signOut]);

  function AccessRoute() {
    switch (user?.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  return <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>;
}
