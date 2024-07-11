import styled from "styled-components";
import Image from "../../../../../node_modules/next/image";
import theme from "styled-theming";

const titleColor = theme("mode", {
  light: "#333333",
  dark: "linear-gradient(90deg, #690DFF 0%, #FF00F5 100%)",
});

const textColor = theme("mode", {
  light: "#4E4E4E",
  dark: "#9B9B9B",
});

export const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  gap: 40px;
  margin-top: 120px;

  @media (max-width: 1300px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
    gap: 140px;
  }

  @media (max-width: 650px) {
    width: 360px;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 60px;
  }

  @media (max-width: 360px) {
    width: 360px;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 60px;
  }
`;

export const Photo1 = styled(Image)`
  @media (max-width: 650px) {
    width: 199px;
    height: 303px;
  }
  @media (max-width: 360px) {
    width: 199px;
    height: 303px;
  }
`;
export const Photo2 = styled(Image)`
  position: absolute;
  right: 5px;
  top: 150px;

  @media (max-width: 650px) {
    width: 148px;
    height: 219px;
    right: 175px;
    top: 110px;
  }

  @media (max-width: 360px) {
    width: 148px;
    height: 219px;
    right: 175px;
    top: 110px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 625px;
  position: relative;

  @media (max-width: 1300px) {
    right: 70px;
  }

  @media (max-width: 650px) {
    right: 0px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 90px;
  /* width: 625px; */

  @media (max-width: 650px) {
    width: 300px;
    gap: 45px;
  }

  @media (max-width: 360px) {
    width: 300px;
    gap: 45px;
  }
`;

export const RightSideUp = styled.div``;

export const RightSideDown = styled.div``;

export const Title = styled.div`
  width: 320px;
  /* height: 47px; */
  gap: 0px;
  opacity: 0px;

  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 400;
  line-height: 46.8px;
  text-align: left;

  color: ${titleColor};

  background: ${titleColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  margin-bottom: 30px;

  @media (max-width: 650px) {
    width: 160px;
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
  }
  @media (max-width: 360px) {
    width: 160px;
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
  }
`;

export const BlockText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WrapperText = styled.div`
  width: 580px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    width: 300px;
  }

  @media (max-width: 360px) {
    width: 300px;
  }
`;

export const Text = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  text-align: left;
  color: ${textColor};

  width: 540px;

  @media (max-width: 650px) {
    width: 258.02px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: left;
  }
  @media (max-width: 360px) {
    width: 258.02px;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    text-align: left;
  }
`;

export const BoldText = styled.span`
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.78px;
  text-align: left;
  color: ${textColor};
  @media (max-width: 650px) {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.94px;
    text-align: left;
  }

  @media (max-width: 360px) {
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.94px;
    text-align: left;
  }
`;

export const IconCheck = styled(Image)``;
