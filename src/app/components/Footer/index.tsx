"use client";

import {
  Button,
  GradientBorderButtonWrapper,
  Logo,
  TitleLogo,
  WrapperLogo,
} from "../shared/styled";
import {
  Container,
  TextFooter,
  TextPolicy,
  TextPolicyLink,
  Wrapper,
  WrapperPolicy,
} from "./styled";

import LogoSvg from "../../../../public/assets/icon/Logo.svg";
import { useRouter } from "../../../../node_modules/next/navigation";

export const Footer = () => {
  const router = useRouter();
  const goToAboutPage = () => {
    router.push("/policy");
  };

  return (
    <Container>
      <Wrapper>
        <WrapperLogo>
          <Logo src={LogoSvg} alt="logo" priority />
          <TitleLogo>Clari</TitleLogo>
        </WrapperLogo>
        <TextFooter>
          NumphLens Blends AI Artisty with the Magic of Photography
        </TextFooter>
        <WrapperPolicy>
          <TextPolicyLink
            onClick={() => {
              goToAboutPage();
            }}
          >
            Privacy Policy
          </TextPolicyLink>
          <TextPolicy>Terms & Conditions</TextPolicy>
        </WrapperPolicy>

        <GradientBorderButtonWrapper>
          <Button>Try it</Button>
        </GradientBorderButtonWrapper>
      </Wrapper>
    </Container>
  );
};
