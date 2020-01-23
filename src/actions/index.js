import { FETCH_WEATHER, APP_STATE } from "../actionTypes";

const fetch_weather_data = (city, unitSystem) => ({
  type: FETCH_WEATHER,
  payload: { city, unitSystem }
});

const set_app_state = appState => ({
  type: APP_STATE,
  payload: appState
});

const appActions = {
  fetch_weather_data,
  set_app_state
};

export default appActions;
