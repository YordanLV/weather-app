import {
  APP_STATE,
  FETCH_WEATHER,
  USER_INPUTS,
  FETCH_FORECAST
} from "../actionTypes";

const fetch_forecast_data = city => ({
  type: FETCH_FORECAST,
  payload: { city }
});

const fetch_weather_data = city => ({
  type: FETCH_WEATHER,
  payload: { city }
});

const set_app_state = appState => ({
  type: APP_STATE,
  payload: appState
});

const set_user_inputs = (city, unitSystem) => ({
  type: USER_INPUTS,
  payload: { city, unitSystem }
});

const appActions = {
  fetch_forecast_data,
  fetch_weather_data,
  set_app_state,
  set_user_inputs
};

export default appActions;
