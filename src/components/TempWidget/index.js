import React from "react";

import TempWidgetWrapper from "./TempWidgetWrapper";
import scrollToBottom from "util/scrollToBottom";

import searchIcon from "images/magnifying-glass.svg";
import rainIcon from "images/rainy.svg";
import sunIcon from "images/sunny.svg";

const TempWidget = ({ appState }) => {
  return (
    <TempWidgetWrapper appState={appState}>
      <div className="location">
        <input id="location" placeholder="Location" type="text" />
        <label htmlFor="location">
          <img src={searchIcon} alt="Search" />
        </label>
      </div>
      <div className="temperature">
        27°<sup>C</sup>
        <img
          className="weather-icon"
          src={false ? rainIcon : sunIcon}
          alt="Rainy"
        />
      </div>
      <span className="weather-text">{false ? "Rainy" : "Sunny"}</span>
      <span onClick={scrollToBottom} className="more-details">
        More details
      </span>
    </TempWidgetWrapper>
  );
};

export default TempWidget;
