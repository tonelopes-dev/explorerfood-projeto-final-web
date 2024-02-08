import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding-left: 12px;
    border-radius: 8px;
    margin: auto;
  }
  img {
    width: 20px;
    height: 20px;
  }
  label {
    display: flex;
    justify-content: start;
    margin-bottom: ${({ $isuser }) => ($isuser ? "8px" : "16px")};
  }

  input {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 16px 14px;
    border-radius: 8px;
    border: none;
  }

  .border-on {
    border: ${({ $isuser }) => ($isuser ? "1px solid white" : "none")};
  }
`;
