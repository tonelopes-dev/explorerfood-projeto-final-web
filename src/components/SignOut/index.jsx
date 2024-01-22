import React from "react";
import { Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export const SignOut = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  function handleSignOut() {
    navigate("/");
    signOut();
  }
  return (
    <Logout onClick={handleSignOut}>
      <img
        src="./src/assets/icons/SignOut.svg"
        alt="icone de deslogar da página."
      />
    </Logout>
  );
};
