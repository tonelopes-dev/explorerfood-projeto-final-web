import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

// Helper function para aplicar estilos flex com base nas props
const flexCenter = (direction = "row", justifyContent = "center", alignItems = "center") => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const Container = styled.div`
  ${flexCenter()};
  max-width: 1112px;
  width: 100%;
  margin: auto;
  height: 100vh;

  a {
    ${flexCenter("column")};
    border-radius: 0 0 16px 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    img {
      width: 278px;
      height: 44px;
    }
  }
`;

export const Content = styled.div`
  ${flexCenter("row", "space-between")};
  width: 100%;
  padding: 0 56px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Form = styled.form`
  ${flexCenter("column")};
  gap: 32px;
  padding: 64px;
  max-width: 476px;
  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  text-align: center;

  h1 {
    font-family: var(--poppins);
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 32px;
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }

  input {
    width: 100%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    background-color: transparent;
    padding: 54px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 34px;
  }
`;
