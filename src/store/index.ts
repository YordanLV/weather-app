import { applyMiddleware, createStore } from "redux";
import { createLogicMiddleware } from "redux-logic";

import fetchWeatherLogic from "logic/fetchWeatherLogic";
import fetchForecastLogic from "logic/fetchForecastLogic";

import rootReducer from "reducers";

const arrLogic: Array<any> = [fetchWeatherLogic, fetchForecastLogic];

const logicMiddleware = createLogicMiddleware(arrLogic);

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(logicMiddleware));
}
