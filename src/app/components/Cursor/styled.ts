import styled from "styled-components";

import theme from "styled-theming";

const backgroundColor = theme("mode", {
  light: "rgba(0, 0, 0, 0.4)",
  dark: "rgba(255, 255, 255, 0.472)",
});

export const CursorWrapper = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  pointer-events: none;

  background: ${backgroundColor};
  border-radius: 50%;

  box-shadow: 0 0 100px 300px ${backgroundColor};
  transform: translate(-50%, -50%);
  transition: 0.1s ease, box-shadow 0.2s ease;

`;
