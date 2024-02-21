import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  font-size: 1.4rem;
  font-weight: 300;
  font-family: var(--poppins);
  padding: 16px 24px;
  white-space: nowrap;
  img {
    margin-right: 8px;
    width: 32px;
    height: 32px;
    padding: 2px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.4rem;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
