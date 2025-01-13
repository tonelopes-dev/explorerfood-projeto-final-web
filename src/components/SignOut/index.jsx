import { useAuth } from "../../hooks/auth";
import { Logout } from "./styles";
import { useNavigate } from "react-router-dom";

export const SignOut = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  function handleSignOut() {
    signOut();
    navigate("/");
  }
  return (
    <Logout
      onClick={handleSignOut}
      className="signout"
    >
      <img
        src="/assets/icons/SignOut.svg"
        alt="icone de deslogar da página."
        loading="lazy"
      />
    </Logout>
  );
};
