import React, { useState, useEffect } from "react";
import "./App.css";
import BigScreen from "./layout/bigScreen";
import SmallScreen from "./layout/smallScreen";
import DataHandler from "./api";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  DataHandler();
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return <>{isSmall ? <SmallScreen></SmallScreen> : <BigScreen></BigScreen>}</>;
}

export default App;
