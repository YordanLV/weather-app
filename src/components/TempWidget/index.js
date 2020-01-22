import React from "react";

import TempWidgetWrapper from "./TempWidgetWrapper";
import scrollToBottom from "util/scrollToBottom";

import searchIcon from "images/magnifying-glass.svg";
import rainIcon from "images/rainy.svg";
import sunIcon from "images/sunny.svg";

const TempWidget = ({ appState }) => {
  return (
    <TempWidgetWrapper appState={appState}>
      <div class="location">
        <input id="location" placeholder="Location" type="text" />
        <label for="location">
          <img src={searchIcon} alt="Search" />
        </label>
      </div>
      <div class="temperature">
        27°<sup>C</sup>
        <img
          class="weather-icon"
          src={false ? rainIcon : sunIcon}
          alt="Rainy"
        />
      </div>
      <span class="weather-text">Sunny</span>
      <span onClick={scrollToBottom} class="more-details">
        More details
      </span>
    </TempWidgetWrapper>
  );
};

export default TempWidget;
