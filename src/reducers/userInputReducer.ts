import { Reducer } from "redux";
import { UserInputTypes } from "actionTypes";

interface UserInputState {
  readonly city: string,
  readonly unitSystem: string
}

const initialState: UserInputState = {
  city: "New York",
  unitSystem: "metric"
};

const userInputReducer: Reducer<UserInputState> = (state = initialState, action) => {
  switch (action.type) {
    case UserInputTypes.USER_INPUTS:
      return {
        ...state,
        city: action.payload.city,
        unitSystem: action.payload.unitSystem
      };
    default:
      return state;
  }
}

export default userInputReducer;