import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 18px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
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
  height: 48px;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  border-radius: 8px;
  gap: 16px;
  width: 837px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
`;
