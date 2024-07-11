import { ThemeContext } from "@/app/Context/context";
import {
  ContainerPage,
  GradientBorderButtonWrapper,
  ModeButton,
} from "@/app/styled";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import GlowCursor from "../Cursor/index";
import { Footer } from "../Footer/index";
import { Navbar } from "../Navbar/index";
import { FirstBlock } from "../Stage/FirstBlock/index";
import { FourthBlock } from "../Stage/FoutrhBlock/index";
import { SecondBlock } from "../Stage/SecondBlock/index";
import { ThirdBlock } from "../Stage/ThirdBlock/index";
import { TitleInfo } from "../TitleInfo/index";
import { useLocalStorage } from "../UseLocalStorage/index";

export const AllPage = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { themeCont, toggleTheme } = useContext(ThemeContext);

  const title1 = "Enhance Your Images with Creativity Powered by AI";
  const text1 =
    "NymphLens revolutionizes photography by merging cutting-edge AI with intuitive features, ideal for both social media aficionados and creative experts.";

  const title2 = "The Digital Artistry Frontier";
  const text2 =
    "NymphLens unlocks a vast spectrum of AI-powered photography features, serving a diverse clientele from social media influencers to individual enthusiasts.";

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <ContainerPage>
        <GradientBorderButtonWrapper>
          <ModeButton
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
              toggleTheme();
            }}
          >
            {theme === "light" ? "dark" : "light"}
          </ModeButton>
        </GradientBorderButtonWrapper>
        <Navbar />
        <FirstBlock />
        <TitleInfo title={title1} text={text1} />
        <SecondBlock />
        <TitleInfo title={title2} text={text2} />
        <ThirdBlock />
        <FourthBlock />
        <Footer />
      </ContainerPage>
      <GlowCursor />
    </ThemeProvider>
  );
};
