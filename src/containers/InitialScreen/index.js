import React from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import InitialImage from "components/InitialImage";
import Section from "components/Section";
import TempWidget from "components/TempWidget";

const InitialScreen = ({ appState }) => {
  const dispatch = useDispatch();

  const { currentWeatherData, fetchStatus } = useSelector(
    store => store.weatherReducer
  );

  const { city, unitSystem } = useSelector(store => store.userInputReducer);

  const setCity = event => {
    const city = event.target.value;
    dispatch(appActions.set_user_inputs(city, unitSystem));
  };

  const setUnitSystem = () => {
    dispatch(
      appActions.set_user_inputs(
        city,
        unitSystem === "metric" ? "imperail" : "metric"
      )
    );
  };

  const getWeather = () => {
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
        city={city}
        currentWeatherData={currentWeatherData}
        fetchStatus={fetchStatus}
        getWeather={getWeather}
        setCity={setCity}
        setUnitSystem={setUnitSystem}
        unitSystem={unitSystem}
        weather={weather}
      />
      <InitialImage appState={appState} weather={weather} />
    </Section>
  );
};

export default InitialScreen;
