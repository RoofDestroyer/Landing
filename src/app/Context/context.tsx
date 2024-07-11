import { createContext, useState, useContext } from "react";

// type ThemeContextType = {
//   mode: string;
//   setMode: any;
// };

export const ThemeContext = createContext<any>({ undefined });

export const ThemeProviderCont = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
