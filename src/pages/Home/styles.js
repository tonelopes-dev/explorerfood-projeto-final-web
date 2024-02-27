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
  width: 93%;
  max-height: 260px;
  min-height: 120px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  margin-top: 164px;
  margin-bottom: 62px;
  background: linear-gradient(180deg, rgba(240, 249, 255, 1) 0%, rgba(0, 255, 38, 1) 0%, rgba(9, 30, 38, 1) 0%, rgba(0, 19, 28, 1) 100%);
  @media (max-width: 875px) {
    margin-top: 77px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 30px;
  }
`;
export const ImageBanner = styled.div`
  margin-left: -78px;

  margin-top: -143px;
  align-items: flex-end;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 875px) {
    margin-top: -67px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: -30px;
  }
`;
export const TitleBanner = styled.div`
  min-width: 442px;
  padding-right: 20px;
  h1 {
    font-family: var(--poppins);
    font-size: 4rem;
    font-weight: 500;

    font-style: normal;
    line-height: 140%;
    @media (max-width: 875px) {
      font-size: 3.6rem;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 3.4rem;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 1.8rem;
    }
  }
  p {
    @media (max-width: 875px) {
      font-size: 1.6rem;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1.2rem;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    min-width: 390px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    min-width: 210px;
  }
`;
export const Content = styled.main`
  margin-bottom: 40px;
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
  display: none;
  position: absolute;
  z-index: 1;
  right: 0;
  left: 0px;
  top: 0px;
  bottom: 0px;

  width: 100%;
  background: rgb(0, 7, 10);
  background: linear-gradient(270deg, rgba(0, 7, 10, 0.6474964985994398) 0%, rgba(0, 7, 10, 0) 50%, rgba(0, 7, 10, 0.6530987394957983) 100%);
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
