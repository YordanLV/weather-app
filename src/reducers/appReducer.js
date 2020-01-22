import { APP_STATE } from "actionTypes";

const initialState = {
  appState: "inital"
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_STATE:
      return {
        ...state,
        appState: action.payload
      };
    default:
      return state;
  }
}
