import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 194px;
  width: 100%;
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
  .icon-options-quantity {
    width: 20px;
    height: 20px;
  }
`;
