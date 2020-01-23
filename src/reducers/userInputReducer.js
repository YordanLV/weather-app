import { USER_INPUTS } from "actionTypes";

const initialState = {
  city: "Location",
  unitSystem: "metric"
};

export default function userInputReducer(state = initialState, action) {
  switch (action.type) {
    case USER_INPUTS:
      return {
        ...state,
        city: action.payload.city,
        unitSystem: action.payload.unitSystem
      };
    default:
      return state;
  }
}
