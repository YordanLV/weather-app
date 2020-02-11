import { combineReducers } from "redux";

import appReducer from "./appReducer";
import forecastReducer from "./forecastReducer";
import userInputReducer from "./userInputReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  appReducer,
  userInputReducer,
  forecastReducer,
  weatherReducer
});

export default rootReducer;
