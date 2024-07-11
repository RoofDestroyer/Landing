import { Card, Container, IconCard, Text, Title } from "./styled";

import Icon1 from "../../../../../public/assets/icon/material-symbols-light_brush-outline (1).svg";
import Icon2 from "../../../../../public/assets/icon/material-symbols-light_brush-outline (2).svg";
import Icon3 from "../../../../../public/assets/icon/material-symbols-light_brush-outline (3).svg";
import Icon4 from "../../../../../public/assets/icon/material-symbols-light_brush-outline (4).svg";
import Icon5 from "../../../../../public/assets/icon/material-symbols-light_brush-outline (5).svg";
import Icon6 from "../../../../../public/assets/icon/material-symbols-light_brush-outline (6).svg";

const InfoCards = [
  {
    icon: Icon1,
    title: "Diverse Style Range",
    text: "Discover a diverse range of styles for creating one-of-a-kind, captivating images that cater to every artistic preference.",
  },
  {
    icon: Icon2,
    title: "Diverse Style Range",
    text: "Discover a diverse range of styles for creating one-of-a-kind, captivating images that cater to every artistic preference.",
  },
  {
    icon: Icon3,
    title: "Diverse Style Range",
    text: "Discover a diverse range of styles for creating one-of-a-kind, captivating images that cater to every artistic preference.",
  },
  {
    icon: Icon4,
    title: "Diverse Style Range",
    text: "Discover a diverse range of styles for creating one-of-a-kind, captivating images that cater to every artistic preference.",
  },
  {
    icon: Icon5,
    title: "Diverse Style Range",
    text: "Discover a diverse range of styles for creating one-of-a-kind, captivating images that cater to every artistic preference.",
  },
  {
    icon: Icon6,
    title: "Diverse Style Range",
    text: "Discover a diverse range of styles for creating one-of-a-kind, captivating images that cater to every artistic preference.",
  },
];

export const SecondBlock = () => {
  return (
    <Container>
      {InfoCards.map((el, i) => {
        return (
          <Card key={i}>
            <IconCard src={el.icon} alt="icon" priority />
            <Title>{el.title}</Title>
            <Text>{el.text}</Text>
          </Card>
        );
      })}
    </Container>
  );
};
