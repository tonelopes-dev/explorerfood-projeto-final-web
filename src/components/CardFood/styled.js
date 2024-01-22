import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 304px;
  max-height: 462px;
  justify-content: center;
  align-items: center;
  padding: 14px;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  .price-item {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 32px;
    line-height: 160%;
    margin: 15px 0;
  }
`;

export const PhotoFood = styled.div`
  display: flex;
  align-items: flex-start;
  .photo-food {
    width: 176px;
  }
`;

export const Description = styled.div`
  h1 {
    font-family: var(--poppins);
    font-size: 2.4rem;
    margin-bottom: 15px;
  }
`;
export const AmountFood = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 0 48px;
  width: 108px;

  .options {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
    align-items: center;
    font-size: 16px;
  }
  .button-options {
    background-color: transparent;
    border: none;
    display: flex;
  }
`;
