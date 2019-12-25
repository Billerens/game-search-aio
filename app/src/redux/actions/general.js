import { SET_FIND_TEXT } from "../actionsTypes/general";

export function setFindText(text) {
  return async function(dispatch) {
    dispatch({
      type: SET_FIND_TEXT,
      payload: text
    });
  };
}
