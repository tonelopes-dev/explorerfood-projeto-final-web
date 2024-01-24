import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 1112px;

  margin: auto;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;
export const Banner = styled.section`
  display: flex;
  width: 100%;
  height: 260px;
  align-items: center;
  margin-top: 164px;
  margin-bottom: 48px;
  background: linear-gradient(
    180deg,
    rgba(240, 249, 255, 1) 0%,
    rgba(0, 255, 38, 1) 0%,
    rgba(9, 30, 38, 1) 0%,
    rgba(0, 19, 28, 1) 100%
  );
  div > h1 {
    font-family: var(--poppins);
    font-size: 40px;
    font-weight: 500;
  }
  img {
    align-self: flex-end;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
`;
export const TitleSection = styled.h1`
  z-index: 2;
`;
export const CardsFoods = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  overflow-x: scroll;
  gap: 27px;
  margin-top: 30px;
  height: 100%;
`;
