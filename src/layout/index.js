import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./reset.css";

const theme = {
  fuelYellow: "#EEB625",
  bayGreen: "#61A9A6",
  peachy: "#EEA594"
};

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    /* 1rem = 10px */
    font-size: 62.5%;
  }
  body {
    background-color: white;
    font-size: 1.6rem;
    /* Largest mobile device is with 425px screen width */
    max-width: 42.5rem;
    margin: 0 auto;
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
