import {
  FETCH_FORECAST,
  FETCH_FORECAST_CANCEL,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILED
} from "actionTypes";

const initialState = {
  forecastWeatherData: {},
  fetchStatus: ""
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECAST:
      return {
        ...state,
        fetchStatus: `fetching`,
        forecastWeatherData: {}
      };
    case FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        fetchStatus: `fetched`,
        forecastWeatherData: action.payload
      };
    case FETCH_FORECAST_FAILED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      };
    case FETCH_FORECAST_CANCEL:
      return {
        ...state,
        fetchStatus: "user cancelled"
      };
    default:
      return state;
  }
}
