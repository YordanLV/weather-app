import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import InitialImage from "components/InitialImage";
import Section from "components/Section";
import TempWidget from "components/TempWidget";

const InitialScreen = ({ appState }) => {
  const dispatch = useDispatch();

  const [city, setCity] = useState("New York");
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    // dispatch(appActions.fetch_weather_data(city, unitSystem));
  }, [city, dispatch, unitSystem]);

  const getCity = event => {
    const city = event.target.value;
    // dispatch(appActions.fetch_weather_data(city, unitSystem));
    setCity(city);
  };

  const getWeather = () => {
    dispatch(appActions.fetch_weather_data(city, unitSystem));
  };

  const currentWeatherData = useSelector(
    store => store.weatherReducer.currentWeatherData
  );

  const changeUnitSystem = () => {
    unitSystem === "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");
    dispatch(appActions.fetch_weather_data(city, unitSystem));
  };

  const weather =
    currentWeatherData?.weather && currentWeatherData.weather[0].main;
  return (
    <Section
      inputColor={props =>
        weather === "Rain" ? props.theme.bayGreen : props.theme.fuelYellow
      }
    >
      <TempWidget
        appState={appState}
        changeUnitSystem={changeUnitSystem}
        city={city}
        currentWeatherData={currentWeatherData}
        getCity={getCity}
        getWeather={getWeather}
        weather={weather}
      />
      <InitialImage appState={appState} weather={weather} />
    </Section>
  );
};

export default InitialScreen;
