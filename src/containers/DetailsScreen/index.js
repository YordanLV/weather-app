import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import Section from "components/Section";

const DetailsScreen = ({ appState }) => {
  const dispatch = useDispatch();
  const { forecastWeatherData } = useSelector(store => store.forecastReducer);
  const { city, unitSystem } = useSelector(store => store.userInputReducer);

  useEffect(() => {
    if (appState === "details") {
      dispatch(appActions.fetch_forecast_data(city));
    }
  }, [appState, city, dispatch]);
  return (
    <Section inputColor={props => props.theme.peachy}>
      {console.log(forecastWeatherData.list)}
    </Section>
  );
};

export default DetailsScreen;
