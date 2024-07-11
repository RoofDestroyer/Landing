import styled from "styled-components";

import theme from "styled-theming";

const titleColor = theme("mode", {
  light: "#333333",
  dark: "#FFFFFF",
});

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 150px;

  @media (max-width: 1300px) {
    margin-top: 120px;
  }

  @media (max-width: 360px) {
    width: 330px;
    margin-top: 0;
  }
`;

export const Title = styled.div`
  width: 835px;
  gap: 0px;
  opacity: 0px;

  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 400;
  line-height: 46.8px;
  text-align: center;

  color: ${titleColor};

  @media (max-width: 770px) {
    width: 600px;
  }

  @media (max-width: 550px) {
    width: 330px;
    font-family: IBM Plex Sans;
    font-size: 27px;
    font-weight: 400;
    line-height: 35.1px;
    text-align: center;
  }

  @media (max-width: 360px) {
    width: 330px;
    font-family: IBM Plex Sans;
    font-size: 27px;
    font-weight: 400;
    line-height: 35.1px;
    text-align: center;
  }
`;

export const Text = styled.div`
  width: 761.89px;
  gap: 0px;
  opacity: 0px;

  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  text-align: center;

  color: ${titleColor};

  @media (max-width: 770px) {
    width: 550px;
  }

  @media (max-width: 550px) {
    width: 330px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    text-align: center;
  }

  @media (max-width: 360px) {
    width: 330px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    text-align: center;
  }
`;
