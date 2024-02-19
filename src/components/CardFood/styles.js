import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 520px;

  justify-content: space-between;

  padding: 14px;
  text-align: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  .price-item {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 3.2rem;
    line-height: 160%;
    margin: 15px 0;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.6rem;
      line-height: 100%;
      margin: 0 0;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 210px;
    height: 292px;
    padding: 24px;
    gap: 12px;
    .quantity-controller {
      flex-direction: column;
      margin: 0 0;
    }
    .button-red {
      height: 32px !important;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PhotoFood = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column-reverse;
  width: 90%;
  margin-top: 24px;
  /*  margin-right: -36px; */
  margin-bottom: 15px;

  .photo-food {
    cursor: pointer;
    width: 176px;
    flex: 1;
  }

  .icon-pencil {
    align-self: flex-end;
    width: 24px;
    height: 24px;
  }

  .icon-like {
    flex: 2;
    align-self: flex-end;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  img:hover {
    filter: brightness(0.9);
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 0px;
    margin-right: 0px;
    flex-direction: column-reverse;
    align-items: center;
    .icon-pencil {
      align-self: end;
    }
    .photo-food {
      width: 88px;
      height: 88px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  h1 {
    font-family: var(--poppins);
    font-size: 2.4rem;
    margin-bottom: 15px;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 12px;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    p {
      display: none;
    }
  }
`;
export const AmountFood = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 16px;
  margin: 0 48px;

  padding-bottom: 24px;

  .options {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
    align-items: center;
    font-size: 16px;
  }
  .button-options {
    background-color: transparent;
    border: none;
    display: flex;
  }
`;
