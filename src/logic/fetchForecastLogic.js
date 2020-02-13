import axios from "axios";
import { createLogic } from "redux-logic";

import { forecastWeatherApi } from "apis";
import { WeatherForecastTypes } from "actionTypes";

const fetchForecastLogic = createLogic({
  type: WeatherForecastTypes.FETCH_FORECAST, // only apply this logic to this type
  cancelType: WeatherForecastTypes.FETCH_FORECAST_CANCEL, // cancel on this type
  latest: true, // only take latest

  process({ getState, action }, dispatch, done) {
    axios
      .get(forecastWeatherApi(action.payload.city))
      .then(resp => resp.data)
      .then(data => dispatch({ type: WeatherForecastTypes.FETCH_FORECAST_SUCCESS, payload: data }))
      .catch(err => {
        dispatch({ type: WeatherForecastTypes.FETCH_FORECAST_FAILED, payload: err, error: true });
      })
      .then(() => done());
  }
});

export default fetchForecastLogic;
