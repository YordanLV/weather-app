import { Reducer } from "redux";
import { AppStateTypes } from "actionTypes";

export interface AppState {
  readonly appState: string
}

const initialState: AppState = {
  appState: "inital"
};

const appReducer: Reducer<AppState> = (state = initialState, action) => {
  switch (action.type) {
    case AppStateTypes.APP_STATE:
      return {
        ...state,
        appState: action.payload
      };
    default:
      return state;
  }
}

export default appReducer;