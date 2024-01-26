import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  width: 480px;
  width: 100%;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 64px;

      border-radius: 0 0 16px 16px;

      margin-bottom: 64px;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1.4rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 64px 64px 32px 64px;

  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  text-align: center;

  h1 {
    font-family: var(--poppins);
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 32px;
  }
  input {
    width: 348px;
  }
`;
