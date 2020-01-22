import { combineReducers } from "redux";

import appReducer from "./appReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  appReducer,
  weatherReducer
});

export default rootReducer;
