import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  margin: auto;
`;
export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  justify-content: space-between;
  align-items: center;
  height: 77px;
  width: 100%;

  padding: 23px 28px;

  img {
    width: 185px;
    height: 30px;
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 1.4rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 23px 10px;
    span {
      font-size: 1.2rem;
    }
    img {
      width: 130px;
      height: auto;
    }
  }
`;
