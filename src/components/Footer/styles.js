import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 77px;
  max-width: 1120px;
  padding: 23px 0;

  img {
    width: 185px;
    height: 30px;
  }
  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-size: 1.4rem;
  }
`;
