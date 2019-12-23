import {
  GET_ALL_GAMES_FAILED,
  GET_ALL_GAMES_SUCCESS,
  GET_ALL_GAMES_REQUEST
} from "../actionsTypes/games";

export function getAllGames() {
  return { type: GET_ALL_GAMES_SUCCESS };
}
