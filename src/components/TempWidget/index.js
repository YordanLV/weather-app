import React from "react";

import TempWidgetWrapper from "./TempWidgetWrapper";
import scrollToBottom from "util/scrollToBottom";

import searchIcon from "images/magnifying-glass.svg";
import rainIcon from "images/rainy.svg";
import sunIcon from "images/sunny.svg";

const TempWidget = ({
  appState,
  currentWeatherData,
  city,
  changeUnitSystem,
  getCity,
  getWeather,
  weather
}) => {
  const isRain = weather === "Rain";
  return (
    <TempWidgetWrapper appState={appState}>
      <div className="location">
        <input
          id="location"
          placeholder={city}
          type="text"
          onChange={getCity}
        />
        <label htmlFor="location">
          <img onClick={getWeather} src={searchIcon} alt="Search" />
        </label>
      </div>
      <div className="temperature">
        {Math.round(currentWeatherData.main?.temp)}
        <div className="indicators">
          <span>°</span>
          <img
            className="weather-icon"
            src={isRain ? rainIcon : sunIcon}
            alt="Rainy"
          />
        </div>
        <sup onClick={changeUnitSystem}>C / F</sup>
      </div>
      <span className="weather-text">{isRain ? "Rainy" : "Sunny"}</span>
      <span onClick={scrollToBottom} className="more-details">
        More details
      </span>
    </TempWidgetWrapper>
  );
};

export default TempWidget;
