import { SET_FIND_TEXT } from "../actionsTypes/general";

const initialState = {
  currentlyFinding: null
};

export default function accountsReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_FIND_TEXT:
      newState.currentlyFinding = action.payload;
      return newState;

    default:
      return state;
  }
}
