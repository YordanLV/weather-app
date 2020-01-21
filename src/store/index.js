import { applyMiddleware, createStore } from "redux";
import { createLogicMiddleware } from "redux-logic";

import fetchWeatherLogic from "logic/fetchWeatherLogic";
import rootReducer from "reducers";

const arrLogic = [fetchWeatherLogic];

const logicMiddleware = createLogicMiddleware(arrLogic);

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(logicMiddleware));
}
