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
  .buttor-header {
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
    .signout {
      display: none;
    }
  }
`;

export const Menu = styled.button`
  background-color: transparent;
  border: none;
`;
