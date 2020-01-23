import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "./fonts.css";
import "./reset.css";

const theme = {
  fuelYellow: "#EEB625",
  bayGreen: "#61A9A6",
  peachy: "#EEA594"
};

const GlobalStyle = createGlobalStyle`
  html{
    /* 1rem = 10px */
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    background-color: white;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
