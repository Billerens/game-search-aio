import { SET_FIND_TEXT } from "../actionsTypes/general";
import generalReducer from "./general";

describe("General reducer", () => {
  it("'Return' should be default", () => {
    const newState = generalReducer(undefined, {});
    expect(newState).toEqual({
      currentlyFinding: null
    });
  });

  it("'Return' currentlyFinding should be 'Less'", () => {
    const newState = generalReducer(undefined, {
      type: SET_FIND_TEXT,
      payload: "Less"
    });
    expect(newState.currentlyFinding).toEqual("Less");
  });

  it("'Return' currentlyFinding should be null", () => {
    const newState = generalReducer(
      { currentlyFinding: "Less" },
      {
        type: SET_FIND_TEXT,
        payload: null
      }
    );
    expect(newState.currentlyFinding).toEqual(null);
  });
});
