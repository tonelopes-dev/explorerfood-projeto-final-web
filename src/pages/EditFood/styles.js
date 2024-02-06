import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1112px;

  margin: auto;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  h1 {
    font-family: var(--poppins);
    font-weight: 400;
    font-size: 3.2rem;
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
  margin-top: 24px;
  margin-bottom: 42px;
  img {
    width: 24px;
    height: 24px;
  }
`;
export const Content = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  margin-bottom: 77px;
  h1 {
    font-family: var(--poppins);
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 100%;
  }
`;

export const FileImageFood = styled.div`
  display: flex;

  flex-direction: column;
  width: 230px;
  justify-content: start;
  align-items: flex-start;
  height: 80px;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  .label-title {
    margin-bottom: 16px;
  }
  .custom-label-image {
    margin-right: 16px;
  }
  input {
    display: none;
  }
  .custom-file-upload {
    display: flex;
    align-items: center;
    border-radius: 8px;
    white-space: nowrap;
    font-family: var(--poppins);
    font-size: 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    max-width: 230px;
    padding: 12px 32px;
  }
`;

export const InputNameFood = styled.div`
  display: flex;
  height: 80px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  max-width: 463px;
  width: 100%;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    margin-bottom: 16px;
  }
  input {
    width: 100%;
    height: 80px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    padding: 16px 14px;
    border-radius: 8px;
    border: none;
  }
`;

export const InputCategory = styled.div`
  display: flex;
  height: 80px;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  max-width: 364px;
  width: 100%;
  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.4rem;
    margin-bottom: 16px;
    width: 100%;
  }

  select {
    width: 100%;
    height: 80px;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    padding: 12px 16px;

    border-radius: 8px;
    border: none;
  }
  option {
    padding: 12px 16px;
  }
`;

export const InputIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  width: 75%;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  border-radius: 8px;
  label {
    margin-bottom: 12px;
  }
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  .container-ingredients {
    border-radius: 8px;
    gap: 16px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
    align-items: center;
  }
  .input-ingredient {
    width: 75px;
  }
`;

export const InputPrice = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 251px;
  label {
    margin-bottom: 12px;
  }
  div {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    padding: 0 14px;
    border-radius: 8px;
    gap: 5px;
    font-size: 1.6rem;
  }
  div p {
    color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }
  input {
    font-size: 1.6rem;
    height: 48px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    padding: 0px;
    border-radius: 8px;
    border: none;
  }
`;
export const InputDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    margin-bottom: 12px;
  }
  textarea {
    width: 100%; /* Faz com que o textarea ocupe 100% da largura do pai */
    height: 172px;
    padding: 14px;
    resize: none;
    border: none;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  .content {
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: end;
    width: 340px;
    height: 48px;
  }
  .button-updated {
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400} !important;
  }
  .button-delete {
    
    background-color: ${({ theme }) => theme.COLORS.DARK_800} !important;
  }
`;
