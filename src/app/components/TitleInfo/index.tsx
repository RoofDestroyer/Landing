import { FC } from "react";
import { Container, Text, Title } from "./styled";

export const TitleInfo: FC<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
};
