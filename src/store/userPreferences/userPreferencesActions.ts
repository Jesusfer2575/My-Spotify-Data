export const ACTIONS = {
  ADD_GENRE_ID: 'ADD_GENRE_ID',
  SET_INVERSE_THEME: 'SET_INVERSE_THEME',
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
