import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const Brand = ({ logo }) => {
  const navigate = useNavigate();
  function handleBack() {
    navigate("/");
  }
  return (
    <Container onClick={() => handleBack()}>
      <img
        src={logo}
        alt="logo food expolorer"
        loading="lazy"
      />
    </Container>
  );
};
