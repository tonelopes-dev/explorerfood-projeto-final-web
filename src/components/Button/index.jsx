import { Container } from "./styles";
import formatCentsValue from "../../utils/formatCentsValue";

export const ButtonRed = ({ quantity, showPrice, price, title = "incluir", type = "button", icon: Icon, loading, ...rest }) => {
  const total = quantity * price;
  const priceFormatted = formatCentsValue(Number(total));

  if (showPrice && quantity > 0) {
    return (
      <Container
        type={type}
        {...rest}
        className="button-red"
      >
        {Icon && (
          <img
            src={Icon}
            alt=""
            loading="lazy"
          />
        )}
        {title} {` ∙ ${priceFormatted}`}
      </Container>
    );
  }

  if (loading) {
    return (
      <Container
        type={type}
        {...rest}
        className="button-red"
      >
        {Icon && (
          <img
            src={Icon}
            alt=""
            loading="lazy"
          />
        )}
        <span>Carregando...</span>
      </Container>
    );
  }

  return (
    <Container
      type={type}
      {...rest}
      className="button-red"
    >
      {Icon && (
        <img
          src={Icon}
          alt=""
          loading="lazy"
        />
      )}
      {title}
    </Container>
  );

};
