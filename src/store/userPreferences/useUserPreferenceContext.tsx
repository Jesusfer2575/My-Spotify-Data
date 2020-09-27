import React, { useEffect, createContext } from 'react';
import { userPreferencesReducer } from './userPreferencesReducer';
import { setInverseThemeAction, addGenreIdAction } from './userPreferencesActions';

const userPreferencesStorageKey = 'USER-PREFERENCES';
const userId = process.env.REACT_APP_USER_ID;

type ProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  theme: 'light',
  genreId: '',
};

function getUserStorageKey() {
  return `${userPreferencesStorageKey}-${userId}`;
}
interface IContext {
  genreId: string;
  theme: string;
  // eslint-disable-next-line
  addGenreId: (genreId: string) => Promise<void>;
  // eslint-disable-next-line
  setInverseTheme: (theme: string) => void;
}

const UserPreferencesContext = createContext<IContext>({
  genreId: '',
  theme: 'light',
  addGenreId: async () => await new Promise((resolve) => resolve()),
  setInverseTheme: () => null,
});

export const UserPreferencesProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = React.useReducer(userPreferencesReducer, {
    ...initialState,
    ...(localStorage.getItem(getUserStorageKey()) ? JSON.parse(localStorage.getItem(getUserStorageKey()) || '') : {}),
  });

  const value = {
    ...state,
    addGenreId: addGenreIdAction(dispatch),
    setInverseTheme: setInverseThemeAction(dispatch),
  };

  useEffect(() => {
    localStorage.setItem(
      getUserStorageKey(),
      JSON.stringify({
        genreId: state.genreId,
        theme: state.theme,
      }),
    );
  }, [state.theme, state.genreId]);

  return <UserPreferencesContext.Provider value={value}>{children}</UserPreferencesContext.Provider>;
};

export default function useUserPreferencesContext() {
  return React.useContext(UserPreferencesContext);
}
