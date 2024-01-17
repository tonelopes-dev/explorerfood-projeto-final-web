import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { Authroutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  return <BrowserRouter>{user ? <AppRoutes /> : <Authroutes />}</BrowserRouter>;
}
