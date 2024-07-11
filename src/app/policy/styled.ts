import styled from "styled-components";
import Image from "../../../node_modules/next/image";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#FFFFFF",
  dark: "#010012",
});

const titleColor = theme("mode", {
  light: "#333333",
  dark: "#FFFFFF",
});

export const Container = styled.div`
  width: 100vw;
  /* margin-bottom: 60px; */
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${backgroundColor};

  @media (max-width: 360px) {
    width: 360px;
  }
`;

export const ContainerInfo = styled.div`
  max-width: 1280px;
  width: 92%;
  margin-bottom: 60px;
  padding: 0 15px;

  @media (max-width: 360px) {
    width: 360px;
  }
`;

export const WrapperBack = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 30px;
`;

export const WrapperArrow = styled.div``;

export const Arrow = styled(Image)``;

export const BackText = styled.div`
  font-family: Ledger;
  font-size: 24px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;

  color: ${titleColor};
`;

export const Title = styled.div`
  font-family: IBM Plex Sans;
  font-size: 50px;
  font-weight: 400;
  line-height: 65px;
  text-align: left;

  color: ${titleColor};
  margin-top: 70px;
`;

export const Text = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20.8px;
  text-align: left;

  max-width: 1052px;
  width: 100%;

  color: ${titleColor};

  @media (max-width: 360px) {
    width: 330px;
  }
`;

export const BlockText = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
