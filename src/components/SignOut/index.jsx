import React from "react";
import { Logout } from "./styles";
import { userAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export const SignOut = () => {
  const { signOut } = userAuth();
  const navigate = useNavigate();
  function handleSignOut() {
    navigate("/");
    signOut();
  }
  return (
    <Logout
      onClick={handleSignOut}
      className="signout"
    >
      <img
        src="/assets/icons/SignOut.svg"
        alt="icone de deslogar da página."
      />
    </Logout>
  );
};
