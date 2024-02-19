import React from "react";
import { BrandSection, ButtonReceipt, Container, HeaderTop, Menu } from "./styles";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { ButtonRed } from "../Button";
import { SignOut } from "../SignOut";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

const logoCustumer = "/assets/icons/logo.png";

export const Header = ({ user, children, ...rest }) => {
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
          <BrandSection>
            <Brand
              logo={logoCustumer}
              className="buttom-header-admin"
            />
            <p>admin</p>
          </BrandSection>

          <Input
            {...rest}
            placeholder="Busque por pratos ou ingredientes"
            icon="/assets/icons/search.svg"
          />
          <div className="buttom-header-admin">
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
          <Menu
            {...rest}
            className="menu-mobile"
          >
            <img
              src="/assets/icons/Menu.svg"
              alt="icone de deslogar da página."
            />
          </Menu>
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
          <ButtonReceipt>
            <div>
              <p>0</p>
            </div>
            <img
              src="/assets/icons/Receipt.svg"
              alt="icone de deslogar da página."
            />
          </ButtonReceipt>

          <SignOut />
        </HeaderTop>
      )}
    </Container>
  );
};
