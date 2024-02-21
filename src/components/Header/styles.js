import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  margin-bottom: 24px;
  width: 100%;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
    padding: 0 28px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 0 8px;
  }
`;
export const HeaderTop = styled.header`
  max-width: 1120px;
  width: 100%;
  display: flex;
  height: 104px;
  align-items: center;
  justify-content: center;

  margin: auto 28px;
  gap: 32px;
  input {
    max-width: 380px;
  }
  .buttor-header-admin {
    height: 56px;
    width: 216px;
    font-size: 14px;
    line-height: 24px;
  }
  .menu-mobile {
    display: none;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: space-between;
    gap: 20px;
    .menu-mobile {
      display: block;
    }

    .input-header,
    .buttor-header,
    .signout,
    .buttom-header-admin {
      display: none;
    }
  }
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    align-self: flex-end;
    margin-top: -5px;
    padding-right: 12px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: row;
    margin: auto;
    p {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      line-height: 31px;
      margin-top: 0px;
      padding-right: 0px;
    }
  }
`;

export const Menu = styled.button`
  background-color: transparent;
  border: none;
`;

export const ButtonReceipt = styled.button`
  display: none;
  position: relative;
  background-color: transparent;
  border: none;
  div {
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`;

export const ContainerMobile = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  &[data-menu-is-open="true"] {
    display: block;
  }
`;
export const HeaderMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 60px 28px 28px 28px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;
export const CloseMenuMobile = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: transparent;
  border: none;
  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.2rem;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;
export const ContentMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px;
  gap: 26px;
  .icon-input {
    width: 24px;
    height: 24px;
    opacity: 0.7;
  }
`;
export const OptionsMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const Options = styled(Link)`
  padding: 10px;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  line-height: 140%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`;

 // ContainerInputmobile

export const ContainerInputmobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 554px;
  width: 100%;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding-left: 12px;
    border-radius: 8px;
    margin: auto;
  }
  img {
    width: 20px;
    height: 20px;
  }
  label {
    display: flex;
    justify-content: start;
    margin-bottom: ${({ $isuser }) => ($isuser ? "8px" : "16px")};
  }

  input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 16px 14px;
    border-radius: 8px;
    border: none;
  }

  .border-on {
    border: ${({ $isuser }) => ($isuser ? "1px solid white" : "none")};
  }
`;