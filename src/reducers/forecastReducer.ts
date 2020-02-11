import { Reducer } from "redux";
import { WeatherForecastTypes } from 'actionTypes'

interface ForcrastState {
  readonly forecastWeatherData: {},
  readonly fetchStatus: string
}

const initialState: ForcrastState = {
  forecastWeatherData: {},
  fetchStatus: ''
}

const weatherReducer: Reducer<ForcrastState> = (state = initialState, action) => {
  switch (action.type) {
    case WeatherForecastTypes.FETCH_FORECAST:
      return {
        ...state,
        fetchStatus: `fetching`,
        forecastWeatherData: {}
      }
    case WeatherForecastTypes.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        fetchStatus: `fetched`,
        forecastWeatherData: action.payload
      }
    case WeatherForecastTypes.FETCH_FORECAST_FAILED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      }
    case WeatherForecastTypes.FETCH_FORECAST_CANCEL:
      return {
        ...state,
        fetchStatus: 'user cancelled'
      }
    default:
      return state
  }
}

export default weatherReducer;