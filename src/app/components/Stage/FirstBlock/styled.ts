import styled from "styled-components";
import Image from "../../../../../node_modules/next/image";
import theme from "styled-theming";

const titleColor = theme("mode", {
  light: "#333333",
  dark: "#FFFFFF",
});

const wrapperButtonBackground = theme("mode", {
  light: "#FFFFFF",
  dark: "#010012",
});

export const Container = styled.div`
  max-width: 1440px;
  width: 100vw;
  height: 600px;
  display: flex;
  /* margin-top: 200px; */
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;
  box-sizing: border-box;
  margin-top: 100px;

  @media (max-width: 1300px) {
    flex-direction: column;
    height: auto;
    gap: 40px;
    margin-bottom: 100px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    height: auto;
    width: 360px;
    padding: 0;
    gap: 60px;
    margin-top: 60px;
    margin-bottom: 120px;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    height: auto;
    width: 360px;
    padding: 0;
    gap: 60px;
    margin-top: 60px;
    margin-bottom: 120px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  width: 35%;
  flex-direction: column;
  gap: 51px;

  @media (max-width: 1300px) {
    width: 507px;
  }

  @media (max-width: 550px) {
    padding: 0 15px;
    width: 100%;
  }

  @media (max-width: 360px) {
    /* justify-content: center; */
    /* align-items: center; */
    padding: 0 15px;
    width: 100%;
  }
`;
export const Stars = styled(Image)``;

export const Title = styled.div`
  /* width: 650px; */
  width: 600px;
  height: 192px;
  gap: 0px;
  opacity: 0px;

  font-family: IBM Plex Sans;
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;
  text-align: left;

  color: ${titleColor};

  @media (max-width: 550px) {
    height: auto;
    width: 330px;
    font-size: 36px;

    font-family: IBM Plex Sans;

    font-weight: 400;
    line-height: 41px;
  }

  @media (max-width: 360px) {
    height: auto;
    width: 330px;
    font-size: 36px;

    font-family: IBM Plex Sans;

    font-weight: 400;
    line-height: 41px;
  }
`;

export const Text = styled.div`
  width: 400px;
  height: 56px;
  gap: 0px;
  opacity: 0px;

  //styleName: Regular/18px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;

  color: #a1a1aa;

  @media (max-width: 550px) {
    width: 330px;
    font-size: 16px;
  }

  @media (max-width: 360px) {
    width: 330px;
    font-size: 16px;
  }
`;

export const GradientBorderButtonWrapper = styled.div`
  display: inline-block;
  border-radius: 60px;
  background: linear-gradient(98.24deg, #6ddcff 0%, #7f60f9 100%);
  padding: 2px; /* Толщина обводки */
  width: 511px;
  height: 64px;

  @media (max-width: 550px) {
    width: 328px;
  }

  @media (max-width: 360px) {
    width: 328px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%; /* Следите за шириной кнопки */
  height: 100%; /* Следите за высотой кнопки */

  background-color: ${wrapperButtonBackground};
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0px 5px;

  @media (max-width: 550px) {
    width: 100%;
    justify-content: start;
  }

  @media (max-width: 360px) {
    width: 100%;
    justify-content: start;
  }
`;

export const Button = styled.button`
  width: 171px;
  height: 50px;
  padding: 16px;
  border-radius: 60px;
  border: none;

  background: linear-gradient(90deg, #690dff 0%, #ff00f5 100%);

  color: white;
`;

export const RightSide = styled.div`
  /* width: 50%; */
  display: flex;
  align-items: center;
  /* right: 25px; */
  gap: 16px;
  position: relative;
  z-index: 4;

  @media (max-width: 650px) {
    /* width: 129.12px;
    height: 201.39px; */
    gap: 8px;
  }

  @media (max-width: 360px) {
    gap: 8px;
  }
`;

export const LeftCollage = styled.div`
  /* position: relative;
  left: 30px; */
`;

export const RightCollage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 650px) {
    /* width: 129.12px;
    height: 201.39px; */
    gap: 8px;
  }

  @media (max-width: 360px) {
    gap: 8px;
  }
`;

export const RightCollageUp = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;

  @media (max-width: 650px) {
    /* width: 129.12px;
    height: 201.39px; */
    gap: 8px;
  }

  @media (max-width: 360px) {
    gap: 8px;
  }
`;

export const RightCollageDown = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 650px) {
    /* width: 129.12px;
    height: 201.39px; */
    gap: 8px;
  }

  @media (max-width: 360px) {
    gap: 8px;
  }
`;

export const Photo1 = styled(Image)`
  position: relative;
  z-index: 4;
  @media (max-width: 650px) {
    /* width: 129.12px;
    height: 201.39px; */
    width: 190px;
    height: auto;
  }

  @media (max-width: 550px) {
    width: 129.12px;
    height: 201.39px;
  }

  @media (max-width: 360px) {
    width: 129.12px;
    height: 201.39px;
  }
`;
export const Photo2 = styled(Image)`
  position: relative;
  z-index: 4;
  @media (max-width: 650px) {
    width: 110px;
    height: auto;
    /* height: 200.37px; */
  }

  @media (max-width: 550px) {
    width: 62.88px;
    height: 136.89px;
  }

  @media (max-width: 360px) {
    width: 62.88px;
    height: 136.89px;
  }
`;
export const Photo3 = styled(Image)`
  position: relative;
  z-index: 4;
  @media (max-width: 650px) {
    width: 200px;
    height: auto;
    /* height: 200.37px; */
  }

  @media (max-width: 550px) {
    width: 119.36px;
    height: 101.3px;
  }

  @media (max-width: 360px) {
    width: 119.36px;
    height: 101.3px;
  }
`;
export const Photo4 = styled(Image)`
  position: relative;
  z-index: 4;
  @media (max-width: 650px) {
    width: 150px;
    height: auto;
    /* height: 200.37px; */
  }

  @media (max-width: 550px) {
    width: 88.09px;
    height: 136.87px;
  }

  @media (max-width: 360px) {
    width: 88.09px;
    height: 136.87px;
  }
`;
export const Photo5 = styled(Image)`
  position: relative;
  z-index: 4;
  @media (max-width: 650px) {
    width: 150px;
    height: auto;
    /* height: 200.37px; */
  }

  @media (max-width: 550px) {
    width: 88.09px;
    height: 136.87px;
  }

  @media (max-width: 360px) {
    width: 88.09px;
    height: 136.87px;
  }
`;

export const Elips = styled(Image)`
  width: 800px;
  height: auto;

  position: absolute;
  z-index: 3;
  top: -130px;
  left: -150px;
  @media (max-width: 1300px) {
    top: -180px;
    left: -150px;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;
