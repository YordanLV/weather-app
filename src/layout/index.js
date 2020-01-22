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
  }
  body {
    background-color: ${props => props.theme.peachy};
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
