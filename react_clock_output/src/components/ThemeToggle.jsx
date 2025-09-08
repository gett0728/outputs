import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";


const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
