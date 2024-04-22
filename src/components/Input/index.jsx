import { Container } from "./styles";

export function Input({ isuser = false, border = false, icon: Icon, for: For, label: Label, type, ...rest }) {
  return (
    <Container
      $isuser={isuser}
      className="input-header"
    >
      {Label && <label>{Label}</label>}
      <div>
        {Icon && (
          <img
            className="icon-input"
            src={Icon}
            alt=""
            loading="lazy"
          />
        )}
        <input
          type={type}
          {...rest}
          className={border ? "border-on" : ""}
        />
      </div>
    </Container>
  );
}
