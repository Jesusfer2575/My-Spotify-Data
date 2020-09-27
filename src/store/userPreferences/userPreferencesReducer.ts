import { ACTIONS } from './userPreferencesActions';
import { IState, IAction } from './userPreferences.interface';

export function userPreferencesReducer(state: IState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.ADD_GENRE_ID:
      return {
        ...state,
        genreId: payload,
      };
    case ACTIONS.SET_INVERSE_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
