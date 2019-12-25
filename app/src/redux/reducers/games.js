import {
  GET_ALL_GAMES_FAILED,
  GET_ALL_GAMES_SUCCESS,
  GET_ALL_GAMES_REQUEST,
  SET_FAVORITE,
  UNSET_FAVORITE,
  SHOW_FULL_GAME_INFO,
  CLOSE_FULL_GAME_INFO
} from "../actionsTypes/games";

const initialState = {
  parsedGamesList: [],
  favoriteGames: [],
  gamesLoading: false,
  gamesLoaded: false,
  allGamesCount: null,
  currentSelected: null,
  isFullInfoShown: false
};

export default function accountsReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case GET_ALL_GAMES_REQUEST:
      newState.gamesLoading = true;
      newState.gamesLoaded = false;
      return newState;

    case GET_ALL_GAMES_FAILED:
      newState.gamesLoading = false;
      newState.gamesLoaded = false;
      newState.parsedGamesList = [];
      console.log(action.payload);
      return newState;

    case GET_ALL_GAMES_SUCCESS:
      newState.gamesLoading = false;
      newState.gamesLoaded = true;
      newState.parsedGamesList = action.payload.results;
      newState.allGamesCount = action.payload.count;
      return newState;

    case SET_FAVORITE:
      newState.favoriteGames = state.favoriteGames.filter(
        item => item.id !== action.payload.id
      );
      if (action.payload !== "") newState.favoriteGames.push(action.payload);
      newState.isFullInfoShown = false;
      return newState;

    case SHOW_FULL_GAME_INFO:
      newState.isFullInfoShown = true;
      newState.currentSelected = action.payload;
      return newState;

    case CLOSE_FULL_GAME_INFO:
      newState.isFullInfoShown = false;
      return newState;

    case UNSET_FAVORITE:
      newState.favoriteGames = state.favoriteGames.filter(
        item => item.id !== action.payload.id
      );
      return newState;

    default:
      return state;
  }
}
