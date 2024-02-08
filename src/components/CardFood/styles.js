import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 520px;

  justify-content: space-between;

  padding: 14px;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  .price-item {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 32px;
    line-height: 160%;
    margin: 15px 0;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PhotoFood = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 24px;
  margin-right: -36px;
  margin-bottom: 15px;
  gap: 16px;
  .photo-food {
    cursor: pointer;
    width: 176px;
    flex: 1;
  }
  .icon-like {
    flex: 2;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  img:hover {
    filter: brightness(0.9);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
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

  padding-bottom: 24px;

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
