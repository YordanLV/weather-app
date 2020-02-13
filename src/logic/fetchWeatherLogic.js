import axios from "axios";
import { createLogic } from "redux-logic";

import { currentWeatherApi } from "apis";
import { WeatherActionTypes } from "actionTypes";

const fetchWeatherLogic = createLogic({
  type: WeatherActionTypes.FETCH_WEATHER, // only apply this logic to this type
  cancelType: WeatherActionTypes.FETCH_WEATHER_CANCEL, // cancel on this type
  latest: true, // only take latest

  process({ getState, action }, dispatch, done) {
    axios
      .get(currentWeatherApi(action.payload.city))
      .then(resp => resp.data)
      .then(data => dispatch({ type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: data }))
      .catch(err => {
        console.error(err);
        dispatch({ type: WeatherActionTypes.FETCH_WEATHER_FAILED, payload: err, error: true });
      })
      .then(() => done());
  }
});

export default fetchWeatherLogic;
