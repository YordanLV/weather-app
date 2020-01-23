import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import Detail from "components/Detail";
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
      <DetailsGrid style={{ marginTop: "25rem" }}>
        <Detail icon="windSpeed">{wind?.speed || 0} km/h</Detail>
        <Detail icon="pressure"> {main?.pressure || 0} hPa</Detail>
        <Detail icon="cloudines"> {clouds?.all || 0} cn</Detail>
        <Detail icon="humidity">{main?.humidity || 0} %</Detail>
      </DetailsGrid>
      <Graph
        forecastWeatherData={forecastWeatherData}
        unitSystem={unitSystem}
      />
    </Section>
  );
};

export default DetailsScreen;
