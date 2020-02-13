import { action } from 'typesafe-actions'

import {
  AppStateTypes,
  UserInputTypes,
  WeatherActionTypes,
  WeatherForecastTypes,
} from "../actionTypes";


const fetch_forecast_data = (city: string) => action(WeatherForecastTypes.FETCH_FORECAST, { city });
const fetch_weather_data = (city: string) => action(WeatherActionTypes.FETCH_WEATHER, { city });
const set_app_state = (appState: string) => action(AppStateTypes.APP_STATE, appState)
const set_user_inputs = (city: string, unitSystem: string) => action(UserInputTypes.USER_INPUTS, { city, unitSystem });


const appActions = {
  fetch_forecast_data,
  fetch_weather_data,
  set_app_state,
  set_user_inputs
};

export default appActions;
