import axios from "axios";
import { createLogic } from "redux-logic";

import {
  FETCH_WEATHER,
  FETCH_WEATHER_CANCEL,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED
} from "actionTypes";

const fetchPollsLogic = createLogic({
  type: FETCH_WEATHER, // only apply this logic to this type
  cancelType: FETCH_WEATHER_CANCEL, // cancel on this type
  latest: true, // only take latest

  process({ getState, action }, dispatch, done) {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&cnt=6&units=metric&appid=e8faecef1e5c6087aa86ae7bbb97fb84"
      )
      .then(resp => resp.data)
      .then(data => dispatch({ type: FETCH_WEATHER_SUCCESS, payload: data }))
      .catch(err => {
        console.error(err);
        dispatch({ type: FETCH_WEATHER_FAILED, payload: err, error: true });
      })
      .then(() => done());
  }
});

export default fetchPollsLogic;
