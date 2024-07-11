import styled from "styled-components";
import Image from "../../../../../node_modules/next/image";
import theme from "styled-theming";

const cardBackground = theme("mode", {
  light: "#F9F9F9",
  dark: "#090819",
});

const titleColor = theme("mode", {
  light: "#333333",
  dark: "#FFFFFF",
});

const textColor = theme("mode", {
  light: "#4E4E4E",
  dark: "#9B9B9B",
});

export const Container = styled.div`
  width: 1440px;

  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 100px;
  padding: 0 80px;

  @media (max-width: 1300px) {
    width: 100%;
    padding: 0 30px;
    gap: 15px;
  }

  @media (max-width: 360px) {
    width: 360px;
    margin-top: 50px;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 15px;
    margin-bottom: 120px;
  }
`;

export const Card = styled.div`
  width: 400px;
  height: 296px;
  padding: 60px;

  border-radius: 10px;
  background: ${cardBackground};
  @media (max-width: 880px) {
    width: 330px;
    height: 313px;
  }
  @media (max-width: 360px) {
    width: 330px;
    height: 313px;
    padding: 60px;
  }
`;

export const IconCard = styled(Image)`
  margin-bottom: 30px;
`;

export const Title = styled.div`
  width: 280px;
  height: 23px;
  gap: 0px;
  opacity: 0px;

  font-family: IBM Plex Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 23.4px;
  text-align: left;

  color: ${titleColor};
  margin-bottom: 10px;

  @media (max-width: 880px) {
    width: 210px;
  }

  @media (max-width: 360px) {
    width: 210px;
  }
`;

export const Text = styled.div`
  width: 280px;
  height: 68px;
  gap: 0px;
  opacity: 0px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: left;

  color: ${textColor};


  @media (max-width: 880px) {
    width: 210px;
  }


  @media (max-width: 360px) {
    width: 210px;
  }
`;
