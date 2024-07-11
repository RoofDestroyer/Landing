"use client";

import React, { useEffect, useRef } from "react";
import "../../styleGlobal.css";
import { useLocalStorage } from "../UseLocalStorage/index";
import { CursorWrapper } from "./styled";

const GlowCursor = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const cursorRef = useRef(null);
  useEffect(() => {}, [theme]);

  useEffect(() => {
    const onMouseMove = (e: any) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY}px`;
        console.log(cursorRef);
        // console.log(styles.glowCursor);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <CursorWrapper ref={cursorRef}></CursorWrapper>;
};

export default GlowCursor;
