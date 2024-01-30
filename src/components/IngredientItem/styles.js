import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border: ${({ theme, $isnew }) => ($isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none")};
  background-color: ${({ theme, $isnew }) => ($isnew ? "transparent" : theme.COLORS.LIGHT_600)};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

    img {
      width: 12px;
      height: 12px;
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > input {
    height: 32px;
    padding: 12px;
    margin-right: 10px;
    padding-right: 0px;
    width: ${({ inputWidth }) => inputWidth}; // Usa a propriedade inputWidth
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
