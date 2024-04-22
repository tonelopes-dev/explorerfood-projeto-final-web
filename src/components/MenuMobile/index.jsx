import { Input } from "../Input";
import { Container, ContentMenuMobile, HeaderMobile, Options, OptionsMenuMobile } from "./styles";

export function MenuMobile() {
  return (
    <ContainerMobile>
      <HeaderMobile>
        <img
          src="/assets/icons/Close.svg"
          alt="icone de fechar o menu"
          loading="lazy"
        />
        <p>Menu</p>
      </HeaderMobile>
      <ContentMenuMobile>
        <Input
          icon="/assets/icons/search.svg"
          placeholder="Busque por pratos ou ingredientes"
        />
        <OptionsMenuMobile>
          <Options>Novo prato</Options>
          <Options>Sair</Options>
        </OptionsMenuMobile>
      </ContentMenuMobile>
    </ContainerMobile>
  );
}
