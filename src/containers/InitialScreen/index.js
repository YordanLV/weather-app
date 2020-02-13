import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Swipeable } from "react-swipeable";
import { withTheme } from 'styled-components'


import appActions from "actions";
import InitialImage from "components/InitialImage";
import scrollToBottom from "util/scrollToBottom";
import Section from "components/Section";
import TempWidget from "components/TempWidget";

const InitialScreen = ({ appState, theme }) => {
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
    dispatch(appActions.fetch_weather_data(city));
  };

  const weather =
    currentWeatherData?.weather && currentWeatherData.weather[0].main;
  return (
    <Swipeable
      onSwiped={eventData =>
        (eventData.dir === "Down" || eventData.dir === "Up") && scrollToBottom()
      }
    >
      <Section
        inputColor={weather === "Rain" ? theme.bayGreen : theme.fuelYellow}
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
    </Swipeable>
  );
};

export default withTheme(InitialScreen);
