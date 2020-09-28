import React, { useEffect, createContext } from 'react';
import { userPreferencesReducer } from './userPreferencesReducer';
import { setInverseThemeAction, addGenreIdAction, setAccessTokenAction } from './userPreferencesActions';

const userPreferencesStorageKey = 'USER-PREFERENCES';
const userId = process.env.REACT_APP_USER_ID;

type ProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  theme: 'light',
  genreId: '',
  token: '',
};

function getUserStorageKey() {
  return `${userPreferencesStorageKey}-${userId}`;
}
interface IContext {
  genreId: string;
  theme: string;
  token: string;
  // eslint-disable-next-line
  addGenreId: (genreId: string) => Promise<void>;
  // eslint-disable-next-line
  setInverseTheme: (theme: string) => void;
  // eslint-disable-next-line
  setAccessToken: (token: string) => void;
}

const UserPreferencesContext = createContext<IContext>({
  genreId: '',
  theme: 'light',
  token: '',
  addGenreId: async () => await new Promise((resolve) => resolve()),
  setInverseTheme: () => null,
  setAccessToken: () => null,
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
    setAccessToken: setAccessTokenAction(dispatch),
  };

  useEffect(() => {
    localStorage.setItem(
      getUserStorageKey(),
      JSON.stringify({
        genreId: state.genreId,
        theme: state.theme,
        token: state.token,
      }),
    );
  }, [state.theme, state.genreId, state.token]);

  return <UserPreferencesContext.Provider value={value}>{children}</UserPreferencesContext.Provider>;
};

export default function useUserPreferencesContext() {
  return React.useContext(UserPreferencesContext);
}
