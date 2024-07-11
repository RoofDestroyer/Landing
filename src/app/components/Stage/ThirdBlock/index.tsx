import {
  BlockText,
  BoldText,
  Container,
  IconCheck,
  LeftSide,
  Photo1,
  Photo2,
  RightSide,
  RightSideDown,
  RightSideUp,
  Text,
  Title,
  WrapperText,
} from "./styled";

import theme from "styled-theming";
import { ThemeProviderCont } from "../../../Context/context";

const titleColor = theme("mode", {
  light: "#333333",
  dark: "linear-gradient(90deg, #690DFF 0%, #FF00F5 100%)",
});
import { ThemeContext } from "@/app/Context/context";

import { useContext } from "react";

import CheckIcon from "../../../../../public/assets/icon/Vector (2).svg";
import CheckIconWhite from "../../../../../public/assets/icon/checkWhite.svg";
import PhotoImage1 from "../../../../../public/assets/image/thirdFrame.svg";
import PhotoImage2 from "../../../../../public/assets/image/thirdFrame2.svg";
import { useLocalStorage } from "../../UseLocalStorage/index";
import CustomSVG from "../../CheckCustom/index";

export const ThirdBlock = () => {
  const { themeCont, toggleTheme } = useContext(ThemeContext);

  const [theme] = useLocalStorage("theme", "light");

  return (
    <ThemeProviderCont>
      <Container>
        <LeftSide>
          <Photo1 src={PhotoImage1} alt="Photo" priority />
          <Photo2 src={PhotoImage2} alt="Photo" priority />
        </LeftSide>

        <RightSide>
          <RightSideUp>
            <Title>As easy, as possible</Title>
            <BlockText>
              <WrapperText>
                <IconCheck
                  src={theme === "light" ? CheckIcon : CheckIconWhite}
                  alt="IconCheck"
                  priority
                />

                <Text>
                  <BoldText>
                    Choose Your Style, Outfit, and Location Instantly:
                  </BoldText>
                  With just a tap, select your preferred style, attire, and
                  backdrop.
                </Text>
              </WrapperText>
              <WrapperText>
                <IconCheck
                  src={theme === "light" ? CheckIcon : CheckIconWhite}
                  alt="IconCheck"
                  priority
                />
                <Text>
                  <BoldText>Image Transformation Without the Hassle:</BoldText>
                  Effortlessly enhance your photos without the need for dressing
                  up or traveling.
                </Text>
              </WrapperText>
              <WrapperText>
                <IconCheck
                  src={theme === "light" ? CheckIcon : CheckIconWhite}
                  alt="IconCheck"
                  priority
                />
                <Text>
                  <BoldText>Instantly Share Picture-Perfect Images:</BoldText>
                  Generate flawless, ready-to-share photos in an instant.
                </Text>
              </WrapperText>
            </BlockText>
          </RightSideUp>

          <RightSideDown>
            <Title>Your digital twin</Title>
            <BlockText>
              <WrapperText>
                <IconCheck
                  src={theme === "light" ? CheckIcon : CheckIconWhite}
                  alt="IconCheck"
                  priority
                />
                <Text>
                  <BoldText>Flawless Identity Alignment:</BoldText> Achieve
                  perfect identity matching with ease.
                </Text>
              </WrapperText>
              <WrapperText>
                <IconCheck
                  src={theme === "light" ? CheckIcon : CheckIconWhite}
                  alt="IconCheck"
                  priority
                />
                <Text>
                  <BoldText>Portraits with Exceptional Detail:</BoldText>{" "}
                  Experience high-definition in every portrait.
                </Text>
              </WrapperText>
              <WrapperText>
                <IconCheck
                  src={theme === "light" ? CheckIcon : CheckIconWhite}
                  alt="IconCheck"
                  priority
                />
                <Text>
                  <BoldText>Minimal Photos, Maximum Understanding:</BoldText> A
                  mere 8-12 photos for a complete personal recognition.
                </Text>
              </WrapperText>
            </BlockText>
          </RightSideDown>
        </RightSide>
      </Container>
    </ThemeProviderCont>
  );
};
