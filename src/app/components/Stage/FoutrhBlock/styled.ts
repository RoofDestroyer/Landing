import styled from "styled-components";
import theme from "styled-theming";

const titleColor = theme("mode", {
  light: "#333333",
  dark: "#FFFFFF",
});

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 190px;
  @media (max-width: 1300px) {
    margin-top: 120px;
    margin-bottom: 120px;
  }
`;

export const Title = styled.div`
  width: 271px;
  height: 25px;
  gap: 0px;
  opacity: 0px;

  font-family: IBM Plex Sans;
  font-size: 36px;
  font-weight: 400;
  line-height: 46.8px;
  text-align: center;

  color: ${titleColor};
`;

export const Text = styled.div`
  width: 503px;

  gap: 0px;
  opacity: 0px;

  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  text-align: center;

  color: ${titleColor};
  @media (max-width: 450px) {
    width: 330px;

    gap: 0px;
    opacity: 0px;
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
  @media (max-width: 360px) {
  }
`;
