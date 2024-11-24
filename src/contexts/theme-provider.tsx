"use client";

import { RiMoonFoggyFill, RiSunFoggyFill } from "@remixicon/react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const preferedTheme: Theme = 'light';
    if (typeof window !== "undefined") {
      let preferedTheme = (localStorage.getItem("theme") as Theme);

      if (preferedTheme)
        preferedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'

      localStorage.setItem("theme", preferedTheme);
      return preferedTheme;
    }
    return preferedTheme || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <button className="fixed z-30 top-5 right-5 flex justify-center items-center p-2 border-gray-700 hover:bg-gray-400/40 dark:hover:bg-zinc-800/80 rounded-xl">
        <RiMoonFoggyFill onClick={() => setTheme('dark')} size={28} className="text-gray-900 scale-100 dark:scale-0" />
        <RiSunFoggyFill onClick={() => setTheme('light')} size={28} className="text-gray-200 absolute scale-0 dark:scale-100" />
      </button>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
