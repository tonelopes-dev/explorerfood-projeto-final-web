import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1112px;

  margin: auto;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const ButtonBack = styled.button`
  display: flex;

  align-items: center;
  gap: 10px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: bold;
  font-size: 2.4rem;
  text-align: left;
  margin-top: 24px;
  margin-bottom: 42px;
  img {
    width: 24px;
    height: 24px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;

  gap: 48px;
  height: 70vh;
`;
export const PhotoFood = styled.div`
  width: 390px;
  height: 390px;
  img {
    max-width: 390px;
    width: 100%;
    height: auto;
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
