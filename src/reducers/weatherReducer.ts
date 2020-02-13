import { Reducer } from "redux";
import { WeatherActionTypes } from "actionTypes";

export interface WeatherState {
  readonly currentWeatherData: {},
  readonly fetchStatus: string
}

const initialState: WeatherState = {
  currentWeatherData: {},
  fetchStatus: ""
};

const weatherReducer: Reducer<WeatherState> = (state = initialState, action) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return {
        ...state,
        fetchStatus: `fetching`,
        currentWeatherData: {}
      };
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        fetchStatus: `fetched`,
        currentWeatherData: action.payload
      };
    case WeatherActionTypes.FETCH_WEATHER_FAILED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      };
    case WeatherActionTypes.FETCH_WEATHER_CANCEL:
      return {
        ...state,
        fetchStatus: "user cancelled"
      };
    default:
      return state;
  }
}

export default weatherReducer;
