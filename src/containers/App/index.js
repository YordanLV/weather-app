import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import InitialScreen from "containers/InitialScreen";
import Section from "components/Section";
import useTransition from "hooks/useTransition";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.fetch_weather_data());
  }, [dispatch]);

  dispatch(appActions.set_app_state(useTransition()));

  const appState = useSelector(store => store.appReducer.appState);
  const weather = useSelector(store => store.weatherReducer.weather);

  return (
    <>
      <Section inputColor={props => props.theme.bayGreen}>
        {/* {JSON.stringify(weather)} */}
        <InitialScreen appState={appState} />
      </Section>
      <Section inputColor={props => props.theme.peachy}></Section>
    </>
  );
};

export default App;
