import styled from "styled-components";

export const Container = styled.modal`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;
export const HeaderMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 60px 28px 28px 28px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  p {
    font-size: 2.2rem;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;
export const ContentMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px;
  gap: 26px;
  .icon-input {
    width: 24px;
    height: 24px;
    opacity: 0.7;
  }
`;
export const OptionsMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Options = styled.p`
  padding: 10px;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  line-height: 140%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`;
