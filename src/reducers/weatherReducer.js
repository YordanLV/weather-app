import {
  FETCH_WEATHER,
  FETCH_WEATHER_CANCEL,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED
} from "actionTypes";

const initialState = {
  weather: {},
  fetchStatus: ""
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        fetchStatus: `fetching... ${new Date().toLocaleString()}`,
        weather: {}
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        fetchStatus: `Results from ${new Date().toLocaleString()}`
      };
    case FETCH_WEATHER_FAILED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      };
    case FETCH_WEATHER_CANCEL:
      return {
        ...state,
        fetchStatus: "user cancelled"
      };
    default:
      return state;
  }
}
