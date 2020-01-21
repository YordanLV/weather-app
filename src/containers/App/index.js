import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import appActions from "actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.fetch_weather_data());
  }, [dispatch]);

  const weather = useSelector(store => store.weatherReducer.weather);

  return <div>{JSON.stringify(weather)}</div>;
};

export default App;
