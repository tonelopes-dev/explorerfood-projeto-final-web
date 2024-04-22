import React, { useState } from "react";
import {
  BrandSection,
  ButtonReceipt,
  CloseMenuMobile,
  Container,
  ContainerInputmobile,
  ContainerMobile,
  ContentMenuMobile,
  HeaderMobile,
  HeaderTop,
  Menu,
  Options,
  OptionsMenuMobile,
} from "./styles";
import { Brand } from "../Brand";
import { Input } from "../Input";
import { ButtonRed } from "../Button";
import { SignOut } from "../SignOut";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../hooks/auth";

const logoCustumer = "/assets/icons/logo.png";

export function Header({ user, children, ...rest }) {
  const { signOut } = userAuth();

  const [menuMobile, setMenuMobile] = useState(false);
  const navigate = useNavigate();
  function handleAddProduct() {
    navigate("/add-new-food/");
  }
  function handleSignOut() {
    navigate("/");
    signOut();
  }
  return (
    <Container>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <HeaderTop>
          <ContainerMobile data-menu-is-open={menuMobile}>
            <HeaderMobile>
              <CloseMenuMobile onClick={() => setMenuMobile(false)}>
                <img
                  src="/assets/icons/Close.svg"
                  alt="icone de fechar o menu"
                  loading="lazy"
                />
                <p>Menu</p>
              </CloseMenuMobile>
            </HeaderMobile>
            <ContentMenuMobile>
              <ContainerInputmobile>
                <div>
                  <img
                    className="icon-input"
                    src="/assets/icons/search.svg"
                    alt=""
                    loading="lazy"
                  />

                  <input placeholder="Busque por pratos ou ingredientes" />
                </div>
              </ContainerInputmobile>
              <OptionsMenuMobile>
                <Options to="/add-new-food/">Novo prato</Options>
                <Options onClick={handleSignOut}>Sair</Options>
              </OptionsMenuMobile>
            </ContentMenuMobile>
          </ContainerMobile>
          <Menu
            onClick={() => setMenuMobile(true)}
            {...rest}
            className="menu-mobile"
          >
            <img
              src="/assets/icons/Menu.svg"
              alt="icone de deslogar da página."
              loading="lazy"
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
            className="input-header"
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
        <>
          <ContainerMobile data-menu-is-open={menuMobile}>
            <HeaderMobile>
              <CloseMenuMobile onClick={() => setMenuMobile(false)}>
                <img
                  src="/assets/icons/Close.svg"
                  alt="icone de fechar o menu"
                  loading="lazy"
                />
                <p>Menu</p>
              </CloseMenuMobile>
            </HeaderMobile>
            <ContentMenuMobile>
              <ContainerInputmobile>
                <div>
                  <img
                    className="icon-input"
                    src="/assets/icons/search.svg"
                    alt=""
                    loading="lazy"
                  />

                  <input placeholder="Busque por pratos ou ingredientes" />
                </div>
              </ContainerInputmobile>

              <OptionsMenuMobile>
                <Options onClick={handleSignOut}>Sair</Options>
              </OptionsMenuMobile>
            </ContentMenuMobile>
          </ContainerMobile>
          <HeaderTop>
            <Menu
              onClick={() => setMenuMobile(true)}
              {...rest}
              className="menu-mobile"
            >
              <img
                src="/assets/icons/Menu.svg"
                alt="icone de deslogar da página."
                loading="lazy"
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
                loading="lazy"
              />
            </ButtonReceipt>

            <SignOut />
          </HeaderTop>
        </>
      )}
    </Container>
  );
}
