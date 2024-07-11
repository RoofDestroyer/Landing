"use client";

import { Container, WrapperNav } from "./styled";
import {
  WrapperLogo,
  Logo,
  TitleLogo,
  GradientBorderButtonWrapper,
  Button,
} from "../shared//styled";

import LogoSvg from "../../../../public/assets/icon/Logo.svg";

export const Navbar = () => {
  return (
    <Container>
      <WrapperNav>
        <WrapperLogo>
          <Logo src={LogoSvg} alt="logo" priority />
          <TitleLogo>Clari</TitleLogo>
        </WrapperLogo>

        <GradientBorderButtonWrapper>
          <Button>Try it</Button>
        </GradientBorderButtonWrapper>
      </WrapperNav>
    </Container>
  );
};
