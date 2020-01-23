import { combineReducers } from "redux";

import appReducer from "./appReducer";
import userInputReducer from "./userInputReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  appReducer,
  userInputReducer,
  weatherReducer
});

export default rootReducer;
