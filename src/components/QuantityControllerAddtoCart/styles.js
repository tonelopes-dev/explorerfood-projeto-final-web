import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  max-width: 372px;
  width: 100%;
  gap: 16px;
  padding: 0px 40px;

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
  .icon-options-quantity {
    width: 20px;
    height: 20px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0px 0px;
    .quantaty {
      font-size: 1.6rem;
    }
  }
`;
