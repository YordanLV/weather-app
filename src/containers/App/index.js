import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import detectScroll from "util/detectScroll";
import Section from "components/Section";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    detectScroll();
    dispatch(appActions.fetch_weather_data());
  }, [dispatch]);

  const weather = useSelector(store => store.weatherReducer.weather);

  return (
    <>
      <Section inputColor={props => props.theme.bayGreen}>
        {JSON.stringify(weather)}
      </Section>
      <Section inputColor={props => props.theme.peachy}></Section>
    </>
  );
};

export default App;
