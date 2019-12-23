import {
  GET_ALL_GAMES_FAILED,
  GET_ALL_GAMES_SUCCESS,
  GET_ALL_GAMES_REQUEST
} from "../actionsTypes/games";

const initialState = {
  parsedGamesList: [],
  favoriteGames: {}
};

export default function accountsReducer(state = initialState, action) {
  const newState = { ...state };
  return state;
}
