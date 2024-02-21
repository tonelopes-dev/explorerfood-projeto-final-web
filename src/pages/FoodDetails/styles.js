import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1112px;
  width: 100%;
  margin: auto auto;

  flex-wrap: wrap;

  margin-bottom: 77px;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    /* max-width: 372px; */
    width: 100%;
    padding: 0 8px;
    padding-bottom: 33px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 48px;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    margin: auto;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  font-family: var(--poppins);
  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-weight: bold;
  font-size: 2.4rem;
  text-align: left;

  margin-bottom: 42px;
  img {
    width: 24px;
    height: 24px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-bottom: 22px;
  }
`;

export const PhotoFood = styled.div`
  width: 390px;
  height: 390px;
  img {
    max-width: 390px;
    width: 100%;
    height: auto;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 264px;
    height: 264px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 200px;
    height: 200px;
  }
`;
export const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 687px;
  width: auto;
  h1 {
    font-size: 4rem;
    margin-bottom: 24px;
  }
  p {
    font-family: var(--poppins);
    font-weight: 300;
    font-size: 2.4rem;
    margin-bottom: 24px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1 {
      font-size: 2.7rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;
export const DetailsFood = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: auto;
`;
export const IngredientsFood = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 48px;
  width: auto;

  span {
    padding: 4px 8px;
    line-height: 24px;
    border-radius: 5px;
    font-family: var(--poppins);
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;

export const Button = styled.div`
  display: flex;
  /* justify-content: start;
  width: 100%; */
  .content {
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: end;
    width: 340px;
    height: 48px;
  }
`;
