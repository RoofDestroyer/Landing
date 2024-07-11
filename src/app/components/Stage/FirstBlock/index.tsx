"use client";

import {
  Button,
  ButtonWrapper,
  Container,
  Elips,
  GradientBorderButtonWrapper,
  LeftCollage,
  LeftSide,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  RightCollage,
  RightCollageDown,
  RightCollageUp,
  RightSide,
  Stars,
  Text,
  Title,
} from "./styled";

import StarsImg from "../../../../../public/assets/icon/Star.svg";

import Photo1Image from "../../../../../public/assets/image/photo1.svg";
import Photo2Image from "../../../../../public/assets/image/Frame 11311.svg";
import Photo3Image from "../../../../../public/assets/image/Frame 11314.svg";
import Photo4Image from "../../../../../public/assets/image/Frame 11316.svg";
import Photo5Image from "../../../../../public/assets/image/image 9.svg";

import ElipsImg from "../../../../../public/assets/image/Ellipse 33.svg";

export const FirstBlock = () => {
  return (
    <Container>
      <LeftSide>
        <Stars src={StarsImg} alt="Stars" priority />
        <Title>Create camera-free, realistic AI images effortlessly</Title>
        <Text>NumphLens Blends AI Artisty with the Magic of Photography</Text>
        <GradientBorderButtonWrapper>
          <ButtonWrapper>
            <Button>TRY IT</Button>
          </ButtonWrapper>
        </GradientBorderButtonWrapper>
      </LeftSide>
      <RightSide>
        <LeftCollage>
          <Photo1 src={Photo1Image} alt="Photo1" priority />
        </LeftCollage>
        <RightCollage>
          <RightCollageUp>
            <Photo2 src={Photo2Image} alt="Photo2" priority />
            <Photo3 src={Photo5Image} alt="Photo5" priority />
          </RightCollageUp>
          <RightCollageDown>
            <Photo4 src={Photo4Image} alt="Photo4" priority />
            <Photo5 src={Photo3Image} alt="Photo3" priority />
          </RightCollageDown>
        </RightCollage>
        <Elips src={ElipsImg} alt="Photo3" priority></Elips>
      </RightSide>
    </Container>
  );
};
