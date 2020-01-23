import React from "react";
import styled from "styled-components";

import sunny from "images/sunny-state.svg";
import rainy from "images/rainy-state.svg";

const InitalImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 60vh;
  opacity: 1;
  transition: 0.5s opacity ease-in-out;
  z-index: 1;
  ${({ appState }) =>
    appState === "details" &&
    `
    opacity: 0;
  `}
`;

const InitialImage = ({ appState, weather }) => {
  if (weather === "Rain")
    return <InitalImg src={rainy} appState={appState} alt="Rainy" />;
  else return <InitalImg src={sunny} appState={appState} alt="Sunny" />;
};

export default InitialImage;
