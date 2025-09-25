"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "./svg/Icons";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeToggleFn = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Button onClick={themeToggleFn} className="flex items-center">
        <Sun className="rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0 " />

        <Moon className="absolute rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
      </Button>
    </>
  );
};

export default ThemeToggle;
