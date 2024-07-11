"use client";

import {
  Button,
  ButtonFooter,
  ContainerError,
  FooterError,
  FooterWrapper,
  Icon,
  LeftSide,
  NumberError,
  RightSide,
  SocialText,
  Text,
  TextFooter,
  Title,
  WrapperError,
  WrapperIcons,
} from "./styled";

import { ThemeProvider } from "styled-components";

import Icon1 from "../../public/assets/icon/gg_facebook.svg";
import Icon2 from "../../public/assets/icon/basil_instagram-solid.svg";
import Icon3 from "../../public/assets/icon/basil_instagram-solid (1).svg";
import { Navbar } from "./components/Navbar/index";
import { Footer } from "./components/Footer/index";
import { useLocalStorage } from "./components/UseLocalStorage/index";
import GlowCursor from "./components/Cursor/index";

export default function NotFound() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  return (
    <ThemeProvider theme={{ mode: theme }}>
      <ContainerError>
        <Navbar />
        <WrapperError>
          <LeftSide>
            <NumberError>404</NumberError>
          </LeftSide>
          <RightSide>
            <Title>ERROR</Title>
            <Text>
              We can't seem to find the page you're looking for. Error code: 404
            </Text>

            <Button>Back</Button>

            <SocialText>We are in social networks</SocialText>
            <WrapperIcons>
              <Icon src={Icon1} alt="Icon1" priority />
              <Icon src={Icon2} alt="Icon1" priority />
              <Icon src={Icon3} alt="Icon1" priority />
            </WrapperIcons>
          </RightSide>
        </WrapperError>
        <FooterWrapper>
          <FooterError>
            <TextFooter>
              We use cookies to improve your experience on the website. By
              staying on our site you consent to the use of cookies.
            </TextFooter>
            <ButtonFooter>Got it</ButtonFooter>
          </FooterError>
          <Footer />
        </FooterWrapper>
      </ContainerError>
      <GlowCursor />
    </ThemeProvider>
  );
}
