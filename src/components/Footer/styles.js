import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  display: flex;
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
    span {
      font-size: 1.2rem;
    }
    img {
      width: 130px;
      height: auto;
    }
  }
`;
