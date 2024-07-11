import styled from "styled-components";
import theme from "styled-theming";
import Link from "../../../../node_modules/next/link";

const backgroundColor = theme("mode", {
  light: "#f8f8f8",
  dark: "#070617",
});

export const Container = styled.div`
  background: ${backgroundColor};
  width: 100vw;
  height: 296px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  @media (max-width: 1024px) {
    height: 420px;
    align-items: unset;
    height: auto;
  }

  @media (max-width: 360px) {
    align-items: unset;
    height: 453px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 90vw;
  height: 296px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 60px 0;
    height: 420px;
  }
  @media (max-width: 360px) {
    width: 360px;
    flex-direction: column;
    gap: 60px;
    padding: 60px 0;
    height: 453px;
  }
`;

export const TextFooter = styled.div`
  width: 405px;
  color: #a1a1aa;
  //styleName: Regular/18px;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 360px) {
    width: 300px;
    text-align: center;
  }
`;

export const WrapperPolicy = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const TextPolicy = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  color: #a1a1aa;
`;

export const TextPolicyLink = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
  color: #a1a1aa;
`;
