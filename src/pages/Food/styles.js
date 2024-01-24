import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1112px;

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
  img {
    width: 390px;
    height: 390px;
  }
`;
export const FoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
export const IngredientsFood = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 48px;

  span {
    padding: 4px 8px;
    line-height: 24px;
    border-radius: 5px;
    font-family: var(--poppins);
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;
export const DetailsFood = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
