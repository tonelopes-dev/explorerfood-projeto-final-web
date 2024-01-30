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
export const Content = styled.div`
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

export const Form = styled.form`
  display: flex;
  gap: 32px;
  width: 100%;
  flex-wrap: wrap;
  img {
    margin-right: 16px;
  }
  .container-file {
    width: 100%;
    white-space: nowrap;
  }
  #file-upload {
    display: none;
    width: 100%;
  }
  .label-image {
    margin-bottom: 16px;
  }
  .custom-file-upload {
    display: flex;
    width: 100%;
    padding: 12px 32px;
    align-items: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
    border: none;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: var(--poppins);
    font-weight: 100;
  }
  #custom-name {
    width: 463px;
  }
  .custom-categories {
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
      margin-bottom: 16px;
    }
    select {
      width: 100%;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 16px 14px;
      border-radius: 8px;
      border: none;
    }
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
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
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
    padding-right: 10px;
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
  width: 100%;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  border-radius: 8px;
  gap: 16px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  .input-ingredient {
    width: 75px;
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
