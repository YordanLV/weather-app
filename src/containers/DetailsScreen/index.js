import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import DetailsGrid from "components/DetailsGrid";
import Graph from "components/Graph";
import Section from "components/Section";

const DetailsScreen = ({ appState }) => {
  const dispatch = useDispatch();
  const { city, unitSystem } = useSelector(store => store.userInputReducer);
  const { currentWeatherData } = useSelector(store => store.weatherReducer);
  const { forecastWeatherData } = useSelector(store => store.forecastReducer);

  useEffect(() => {
    if (appState === "details") {
      dispatch(appActions.fetch_forecast_data(city));
    }
  }, [appState, city, dispatch]);

  const { main, clouds, wind } = currentWeatherData;

  return (
    <Section inputColor={props => props.theme.peachy}>
      <DetailsGrid clouds={clouds} main={main} wind={wind} />
      <Graph
        forecastWeatherData={forecastWeatherData}
        unitSystem={unitSystem}
      />
    </Section>
  );
};

export default DetailsScreen;
