import {
  GET_ALL_GAMES_FAILED,
  GET_ALL_GAMES_SUCCESS,
  GET_ALL_GAMES_REQUEST,
  SET_FAVORITE,
  UNSET_FAVORITE,
  SHOW_FULL_GAME_INFO,
  CLOSE_FULL_GAME_INFO
} from "../actionsTypes/games";
import gamesReducer from "./games";

describe("Games reducer", () => {
  it("'Return' should be default", () => {
    const newState = gamesReducer(undefined, {});
    expect(newState).toEqual({
      parsedGamesList: [],
      favoriteGames: [],
      gamesLoading: false,
      gamesLoaded: false,
      allGamesCount: null,
      currentSelected: null,
      isFullInfoShown: false
    });
  });

  it("'Return' should be with new 3 parsed games", () => {
    const games = { results: [{ game: 1 }, { game: 2 }, { game: 3 }] };
    const newState = gamesReducer(undefined, {
      type: GET_ALL_GAMES_SUCCESS,
      payload: games
    });
    expect(newState.parsedGamesList).toEqual(games.results);
  });

  it("'Return' should be with loading state but not loaded", () => {
    const newState = gamesReducer(undefined, {
      type: GET_ALL_GAMES_REQUEST
    });
    expect(newState.gamesLoading).toEqual(true);
    expect(newState.gamesLoaded).toEqual(false);
  });

  it("'Return' should be with favorite game 2", () => {
    const games = { results: [{ game: 1 }, { game: 2 }, { game: 3 }] };
    var newState = gamesReducer(undefined, {
      type: SET_FAVORITE,
      payload: games.results[1]
    });
    expect(newState.favoriteGames).toEqual(
      expect.arrayContaining([games.results[1]])
    );
  });

  it("'Return' should be no favorite games", () => {
    var newState = gamesReducer(
      {
        favoriteGames: [{ id: 1 }]
      },
      {
        type: UNSET_FAVORITE,
        payload: { id: 1 }
      }
    );
    expect(newState.favoriteGames).toEqual([]);
  });

  it("'Return' should be with loading and loaded = false, parsed = []", () => {
    var newState = gamesReducer(
      {
        parsedGamesList: [{ id: 1 }],
        gamesLoading: true,
        gamesLoaded: true
      },
      {
        type: GET_ALL_GAMES_FAILED
      }
    );
    expect(newState.parsedGamesList).toEqual([]);
    expect(newState.gamesLoading).toEqual(false);
    expect(newState.gamesLoaded).toEqual(false);
  });

  it("'Return' should be with isFullInfoShown = false", () => {
    var newState = gamesReducer(
      {
        isFullInfoShown: true
      },
      {
        type: CLOSE_FULL_GAME_INFO
      }
    );
    expect(newState.isFullInfoShown).toEqual(false);
  });

  it("'Return' should be with isFullInfoShown = true && current should be != NULL", () => {
    var newState = gamesReducer(
      {
        isFullInfoShown: false
      },
      {
        type: SHOW_FULL_GAME_INFO,
        payload: { id: 1 }
      }
    );
    expect(newState.isFullInfoShown).toEqual(true);
    expect(newState.currentSelected).toEqual({ id: 1 });
  });
});
