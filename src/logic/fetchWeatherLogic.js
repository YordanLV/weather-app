import axios from "axios";
import { createLogic } from "redux-logic";

import { currentWeatherApi } from "apis";

import {
  FETCH_WEATHER,
  FETCH_WEATHER_CANCEL,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED
} from "actionTypes";

const fetchWeatherLogic = createLogic({
  type: FETCH_WEATHER, // only apply this logic to this type
  cancelType: FETCH_WEATHER_CANCEL, // cancel on this type
  latest: true, // only take latest

  process({ getState, action }, dispatch, done) {
    axios
      .get(currentWeatherApi(action.payload.city))
      .then(resp => resp.data)
      .then(data => dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data }))
      .catch(err => {
        console.error(err);
        dispatch({ type: FETCH_WEATHER_FAILED, payload: err, error: true });
      })
      .then(() => done());
  }
});

export default fetchWeatherLogic;
