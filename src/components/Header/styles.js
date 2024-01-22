import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  header {
    display: flex;
    max-width: 1368px;
    height: 104px;

    align-items: center;
    justify-content: center;
    padding: 0 123px;
    margin: 0 auto;
    gap: 32px;
    .buttor-header {
      height: 56px;
      width: 216px;
      font-size: 14px;
      line-height: 24px;
    }
    input {
      max-width: 380px;
    }
  }
`;
