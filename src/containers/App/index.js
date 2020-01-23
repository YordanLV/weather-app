import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";
import scrollToTop from "util/scrollToTop";
import DetailsScreen from "containers/DetailsScreen";
import InitialScreen from "containers/InitialScreen";
import useTransition from "hooks/useTransition";

const App = () => {
  // useEffect(() => {
  //   scrollToTop();
  // }, []);
  const dispatch = useDispatch();

  dispatch(appActions.set_app_state(useTransition()));

  const appState = useSelector(store => store.appReducer.appState);

  return (
    <>
      <InitialScreen appState={appState} />
      <DetailsScreen appState={appState} />
    </>
  );
};

export default App;
