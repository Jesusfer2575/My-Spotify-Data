export const ACTIONS = {
  ADD_GENRE_ID: 'ADD_GENRE_ID',
  SET_INVERSE_THEME: 'SET_INVERSE_THEME',
  SET_ACCESS_TOKEN: 'SET_ACCESS_TOKEN',
};

// eslint-disable-next-line
export const addGenreIdAction = (dispatch: any) => async (genreId: string) => {
  dispatch({
    type: ACTIONS.ADD_GENRE_ID,
    payload: genreId,
  });
};

// eslint-disable-next-line
export const setInverseThemeAction = (dispatch: any) => (theme: string) => {
  dispatch({
    type: ACTIONS.SET_INVERSE_THEME,
    payload: theme,
  });
};

// eslint-disable-next-line
export const setAccessTokenAction = (dispatch: any) => (token: string) => {
  dispatch({
    type: ACTIONS.SET_ACCESS_TOKEN,
    payload: token,
  });
} 
