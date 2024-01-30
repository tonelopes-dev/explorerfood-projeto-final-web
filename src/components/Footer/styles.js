import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  max-width: 1120px;
  justify-content: space-between;
  height: 77px;
  width: auto;

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
