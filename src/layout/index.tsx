import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import './fonts.css'
import './reset.css'

type Props = {
  children: React.ReactNode
}

const theme = {
  fuelYellow: '#EEB625',
  bayGreen: '#61A9A6',
  peachy: '#EEA594'
}

const GlobalStyle = createGlobalStyle`
  html{
    /* 1rem = 10px */
    font-size: 62.5%;
    overflow: hidden;
    scroll-behavior: smooth;
  }
  body {
    overflow-x: hidden;
    background-color: white;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
`

const Container = styled.div`
  max-width: 76.8rem;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default Layout
