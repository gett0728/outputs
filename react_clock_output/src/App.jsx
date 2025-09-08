import React from "react";
import { ThemeProvider } from "./components/ThemeContext";
import Layout from "./components/Layout";
import ThemeToggle from "./components/ThemeToggle";
import DigitalClock from "./components/DigitalClock";
import AnalogClock from "./components/AnalogClock";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <ThemeToggle />
        <DigitalClock />
        <AnalogClock />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
