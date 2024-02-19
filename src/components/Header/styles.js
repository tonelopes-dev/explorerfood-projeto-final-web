import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
