import {
  GET_ALL_GAMES_FAILED,
  GET_ALL_GAMES_SUCCESS,
  GET_ALL_GAMES_REQUEST,
  SET_FAVORITE,
  UNSET_FAVORITE,
  SHOW_FULL_GAME_INFO,
  CLOSE_FULL_GAME_INFO
} from "../actionsTypes/games";
import FinderService from "../../services/FinderService";

export const setFavorite = game => ({
  type: SET_FAVORITE,
  payload: game
});

export const unsetFavorite = game => ({
  type: UNSET_FAVORITE,
  payload: game
});

export const showFullGameInfo = game => ({
  type: SHOW_FULL_GAME_INFO,
  payload: game
});

export const closeFullGameInfo = () => ({
  type: CLOSE_FULL_GAME_INFO
});

export function getAllGames(query) {
  return async function(dispatch) {
    dispatch({ type: GET_ALL_GAMES_REQUEST });
    FinderService.findAll(query)
      .then(data => {
        dispatch({
          type: GET_ALL_GAMES_SUCCESS,
          payload: data
        });
      })
      .catch(err => {
        dispatch({ type: GET_ALL_GAMES_FAILED, payload: err });
      });
  };
}
