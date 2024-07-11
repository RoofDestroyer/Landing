"use client";

import { ThemeProviderCont } from "./Context/context";
import { AllPage } from "./components/allPage/index";

export default function Home() {
  return (
    <ThemeProviderCont>
      <AllPage />
    </ThemeProviderCont>
  );
}
