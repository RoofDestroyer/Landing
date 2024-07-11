"use client";
import styled, { ThemeProvider } from "styled-components";

import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import React, { useState, useContext, useEffect } from "react";
import { ThemeProviderCont } from "@/app/Context/context";
import { useLocalStorage } from "@/app/components/UseLocalStorage/index";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  const [mode, setMode] = useLocalStorage("theme", "light");

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={{ mode: mode }}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
}
