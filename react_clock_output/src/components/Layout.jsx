import React, { useContext } from "react";

import { ThemeContext } from "./ThemeContext";


const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      {children}
    </div>
  );
};

export default Layout;
