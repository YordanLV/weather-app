import React from "react";

import cToFahr from "util/cToFahr";
import handleNaN from "util/handleNaN";
import TempWidgetWrapper from "./TempWidgetWrapper";
import scrollToBottom from "util/scrollToBottom";
import scrollToTop from "util/scrollToTop";
import Units from "./Units";

import loader from "images/loader.svg";
import searchIcon from "images/magnifying-glass.svg";
import rainIcon from "images/rainy.svg";
import sunIcon from "images/sunny.svg";

const TempWidget = ({
  appState,
  currentWeatherData,
  city,
  fetchStatus,
  getWeather,
  setUnitSystem,
  setCity,
  unitSystem,
  weather
}) => {
  const isFetching = fetchStatus === "fetching";
  const isMetric = unitSystem === "metric";
  const isRainy = weather === "Rain";
  const temp = currentWeatherData.main?.temp;
  return (
    <TempWidgetWrapper appState={appState}>
      <div className="location">
        <input
          id="location"
          placeholder={city}
          type="text"
          onClick={scrollToTop}
          onChange={setCity}
        />
        <label htmlFor="location">
          <img
            onClick={getWeather}
            src={isFetching ? loader : searchIcon}
            height="16"
            alt="Search"
          />
        </label>
      </div>
      <div className="temperature">
        {handleNaN(
          isMetric ? Math.round(temp) : Math.round(cToFahr(temp)),
          "--"
        )}
        <div className="indicators">
          <span>°</span>
          <img
            className="weather-icon"
            src={isRainy ? rainIcon : sunIcon}
            alt="Rainy"
          />
        </div>
        <sup onClick={setUnitSystem}>
          <Units isMetric={isMetric} />
        </sup>
      </div>
      <span className="weather-text">{isRainy ? "Rainy" : weather}</span>
      <span onClick={scrollToBottom} className="more-details">
        More details
      </span>
    </TempWidgetWrapper>
  );
};

export default TempWidget;
