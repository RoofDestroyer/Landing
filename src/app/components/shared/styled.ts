import styled from "styled-components";
import Image from "../../../../node_modules/next/image";

import theme from "styled-theming";

const textColor = theme("mode", {
  light: "#333333",
  dark: "#FFFFFF",
});

const buttonColor = theme("mode", {
  light: "#FFFFFF",
  dark: "#010012",
});

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled(Image)``;

export const TitleLogo = styled.div`
  color: ${textColor};
`;

export const GradientBorderButtonWrapper = styled.div`
  display: inline-block;
  border-radius: 60px;
  background: linear-gradient(98.24deg, #6ddcff 0%, #7f60f9 100%);
  padding: 2px;
  width: 155px;
  height: 50px;
`;

export const Button = styled.button`
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
