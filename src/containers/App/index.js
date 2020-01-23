import React from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import InitialScreen from "containers/InitialScreen";
import Section from "components/Section";
import useTransition from "hooks/useTransition";

const App = () => {
  const dispatch = useDispatch();

  dispatch(appActions.set_app_state(useTransition()));

  const appState = useSelector(store => store.appReducer.appState);

  return (
    <>
      <InitialScreen appState={appState} />
      <Section inputColor={props => props.theme.peachy}></Section>
    </>
  );
};

export default App;
