import { IAction } from './userPreferences.interface';

export const ACTIONS = {
  ADD_GENRE_ID: 'ADD_GENRE_ID',
  SET_INVERSE_THEME: 'SET_INVERSE_THEME',
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
};

// eslint-disable-next-line
export const addGenreIdAction = (dispatch: React.Dispatch<IAction>) => async (genreId: string) => {
  dispatch({
    type: ACTIONS.ADD_GENRE_ID,
    payload: genreId,
  });
};

// eslint-disable-next-line
export const setInverseThemeAction = (dispatch: React.Dispatch<IAction>) => (theme: string) => {
  dispatch({
    type: ACTIONS.SET_INVERSE_THEME,
    payload: theme,
  });
};

// eslint-disable-next-line
export const setAccessTokenAction = (dispatch: React.Dispatch<IAction>) => (token: string) => {
  dispatch({
    type: ACTIONS.SET_ACCESS_TOKEN,
    payload: token,
  });
};
