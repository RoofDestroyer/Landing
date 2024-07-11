import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "#FFFFFF",
  dark: "#010012",
});

export const Container = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  background-color: ${backgroundColor};
`;

export const WrapperNav = styled.div`
  max-width: 1280px;
  width: 89vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  /* margin-top: 60px; */
  background-color: ${backgroundColor};
  @media (max-width: 360px) {
    width: 360px;
    padding: 0 15px;
  }
`;
