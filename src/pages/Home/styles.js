import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1112px;
  width: 100%;
  margin: auto;
`;
export const Banner = styled.section`
  display: flex;
  width: 100%;
  height: 260px;
  align-items: center;

  margin-top: 164px;
  margin-bottom: 62px;
  background: linear-gradient(
    180deg,
    rgba(240, 249, 255, 1) 0%,
    rgba(0, 255, 38, 1) 0%,
    rgba(9, 30, 38, 1) 0%,
    rgba(0, 19, 28, 1) 100%
  );
`;
export const ImageBanner = styled.div`
  img {
    margin-left: -78px;
    margin-top: -90px;
    align-items: flex-end;
    overflow: scroll;
    width: 100%;
    height: auto;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin-top: -18px;
    }
  }
`;
export const TitleBanner = styled.div`
  h1 {
    font-family: var(--poppins);
    font-size: 4rem;
    font-weight: 500;
  }
`;
export const Content = styled.main`
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 24px;
  }
`;

export const Section = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  align-items: stretch;
  margin-bottom: 48px;
`;

export const SectionContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const ContentGradient = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  left: 0px;
  top: 0px;
  bottom: 0px;

  width: 100%;
  background: rgb(0, 7, 10);
  background: linear-gradient(
    270deg,
    rgba(0, 7, 10, 0.6474964985994398) 0%,
    rgba(0, 7, 10, 0) 50%,
    rgba(0, 7, 10, 0.6530987394957983) 100%
  );
`;

export const TitleSection = styled.h1`
  font-family: var(--poppins);
  font-weight: 400;
  font-size: 3.2rem;
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
