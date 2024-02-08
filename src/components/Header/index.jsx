import React from "react";
import { Container, HeaderTop, Menu } from "./styles";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { ButtonRed } from "../Button";
import { SignOut } from "../SignOut";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

const logoCustumer = "/assets/icons/logo.png";
const logoAdmin = "/assets/icons/logo-admin.png";

export const Header = ({ user, ...rest }) => {
  const navigate = useNavigate();
  function handleAddProduct() {
    navigate("/add-new-food/");
  }
  return (
    <Container>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <HeaderTop>
          <Menu
            {...rest}
            className="menu-mobile"
          >
            <img
              src="/assets/icons/Menu.svg"
              alt="icone de deslogar da página."
            />
          </Menu>
          <Brand logo={logoAdmin} />

          <Input
            {...rest}
            placeholder="Busque por pratos ou ingredientes"
            icon="/assets/icons/search.svg"
          />
          <div className="buttor-header">
            <ButtonRed
              title="Novo produto"
              onClick={() => {
                handleAddProduct();
              }}
            />
          </div>

          <SignOut />
        </HeaderTop>
      )}

      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <HeaderTop>
          <Brand logo={logoCustumer} />
          <Input
            placeholder="Busque por pratos ou ingredientes"
            icon="/assets/icons/search.svg"
          />
          {children}
          <div className="buttor-header">
            <ButtonRed
              icon="/assets/icons/Receipt.svg"
              title="Pedidos (0)"
            />
          </div>

          <SignOut />
        </HeaderTop>
      )}
      {/*  <header>
        <Brand logo={logoCustumer} />
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon="/assets/icons/search.svg"
        />
        <div className="buttor-header">
          <ButtonRed
            icon="/assets/icons/Receipt.svg"
            title="Pedidos (0)"
          />
        </div>

        <SignOut />
      </header> */}
    </Container>
  );
};
