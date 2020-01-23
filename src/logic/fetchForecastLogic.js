import axios from "axios";
import { createLogic } from "redux-logic";

import { forecastWeatherApi } from "apis";

import {
  FETCH_FORECAST,
  FETCH_FORECAST_CANCEL,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILED
} from "actionTypes";

const fetchPollsLogic = createLogic({
  type: FETCH_FORECAST, // only apply this logic to this type
  cancelType: FETCH_FORECAST_CANCEL, // cancel on this type
  latest: true, // only take latest

  process({ getState, action }, dispatch, done) {
    axios
      .get(forecastWeatherApi(action.payload.city))
      .then(resp => resp.data)
      .then(data => dispatch({ type: FETCH_FORECAST_SUCCESS, payload: data }))
      .catch(err => {
        console.error(err);
        dispatch({ type: FETCH_FORECAST_FAILED, payload: err, error: true });
      })
      .then(() => done());
  }
});

export default fetchPollsLogic;
