import { combineReducers } from "redux";
import gamesReducer from "./games";
import generalReducer from "./general";

export const rootReducer = combineReducers({
  games: gamesReducer,
  generals: generalReducer
});
