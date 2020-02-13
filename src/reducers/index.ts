import { combineReducers } from "redux";

import appReducer, { AppState } from "./appReducer";
import forecastReducer, { ForcrastState } from "./forecastReducer";
import userInputReducer, { UserInputState } from "./userInputReducer";
import weatherReducer, { WeatherState } from "./weatherReducer";


export interface ApplicationState {
  appReducer: AppState,
  forecastReducer: ForcrastState,
  userInputReducer: UserInputState,
  weatherReducer: WeatherState
};

const rootReducer = combineReducers({
  appReducer,
  userInputReducer,
  forecastReducer,
  weatherReducer
});

export default rootReducer;
