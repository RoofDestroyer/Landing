import styled from "styled-components";
import Image from "../../node_modules/next/image";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#FFFFFF",
  dark: "#010012",
});

const titleColor = theme("mode", {
  light: "#333333",
  dark: "#FFFFFF",
});

const testColor = theme("mode", {
  light: "#33333380",
  dark: "#9B9B9B",
});

const buttonColor = theme("mode", {
  light: "#FFFFFF",
  dark: "#010012",
});

const textColor = theme("mode", {
  light: "#333333",
  dark: "#FFFFFF",
});

export const GradientBorderButtonWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 25%;
  /* right: 270px; */
  display: inline-block;
  border-radius: 60px;
  background: linear-gradient(98.24deg, #6ddcff 0%, #7f60f9 100%);
  padding: 2px; /* Толщина обводки */
  width: 155px;
  height: 50px;
  /* z-index: 4; */
  @media (max-width: 900px) {
    right: 40%;
  }
`;

export const ModeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  background-color: ${buttonColor};
  color: ${textColor};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  height: 100%;

  outline: none;
`;

export const ContainerPage = styled.div`
  position: relative;
  width: 100%;
  /* padding: 0 80; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${backgroundColor};
`;

export const ContainerError = styled.div`
  width: 100vw;
  height: 100%;
  /* height: 700px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 190px; */
  justify-content: space-between;
  /* gap: 90px; */
  background: ${backgroundColor};

  @media (max-width: 360px) {
    height: 100%;
  }
`;

export const WrapperError = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  /* padding: 0 190px; */
`;

export const LeftSide = styled.div``;

export const NumberError = styled.div`
  font-family: IBM Plex Sans;
  font-size: 325.59px;
  font-weight: 700;
  line-height: 423.26px;
  text-align: center;

  color: ${titleColor};
  @media (max-width: 500px) {
    width: 330px;
    font-family: IBM Plex Sans;
    font-size: 183.35px;
    font-weight: 700;
    line-height: 238.36px;
    text-align: center;
  }

  @media (max-width: 360px) {
    width: 330px;
    font-family: IBM Plex Sans;
    font-size: 183.35px;
    font-weight: 700;
    line-height: 238.36px;
    text-align: center;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const Title = styled.div`
  font-family: IBM Plex Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
  text-align: left;

  color: ${titleColor};
  margin-bottom: 10px;
`;

export const Text = styled.div`
  width: 419px;
  height: 64px;
  gap: 0px;
  opacity: 0px;

  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  color: ${testColor};
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    width: 330px;
    text-align: center;
  }
`;

export const Button = styled.div`
  width: 171px;
  height: 50px;
  padding: 16px;
  border-radius: 60px;
  border: none;

  background: linear-gradient(90deg, #690dff 0%, #ff00f5 100%);

  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24.2px;
  text-align: center;

  @media (max-width: 360px) {
    margin-bottom: 30px;
  }
`;

export const SocialText = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.8px;
  text-align: left;

  color: ${titleColor};
  margin-bottom: 15px;
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled(Image)``;

export const FooterError = styled.div`
  width: 100vw;
  min-height: 91px;
  background: #e9e9e9;
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  background: ${backgroundColor};

  @media (max-width: 900px) {
    min-height: 186px;
    flex-direction: column;
  }
`;

export const TextFooter = styled.div`
  width: 511px;
  height: 46px;
  gap: 0px;
  opacity: 0px;

  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 23.4px;
  text-align: left;

  color: ${titleColor};

  @media (max-width: 560px) {
    width: 330px;
    text-align: center;
  }
`;

export const ButtonFooter = styled.button`
  width: 184px;
  height: 49px;
  /* padding: 10px 60px 10px 60px; */
  /* gap: 10px; */
  border-radius: 360px;
  border: none;

  background: linear-gradient(98.24deg, #6ddcff 0%, #7f60f9 100%);
  color: #ffffff;
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  text-align: center;
`;

export const FooterWrapper = styled.div`
  margin-top: auto;
`;
