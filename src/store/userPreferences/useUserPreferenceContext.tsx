// import React from 'react';

// import { addGenreIdAction, setInverseThemeAction } from './userPreferencesActions';
// import { userPreferencesReducer, initialState } from './userPreferencesReducer';

// type Props = {
//   children: React.ReactNode
// };

// const UserPreferencesContext = React.createContext(null);

// export const UserPreferencesProvider = ({ children }: Props) => {
//   const [state, dispatch] = React.useReducer(userPreferencesReducer, {
//     ...initialState,
//   });

//   const value = {
//     ...state,
//     addGenreId: addGenreIdAction(dispatch),
//     setInverseTheme: setInverseThemeAction(dispatch),
//   };

// return (
//   <UserPreferencesContext.Provider value={value}>
//     {children}
//   </UserPreferencesContext.Provider>);
// };

// export default function useUserPreferencesContext() {
//   return React.useContext(UserPreferencesContext);
// }
import React, { createContext, useReducer } from 'react';
import { userPreferencesReducer } from './userPreferencesReducer';
import { IState } from './userPreferences.interface';

type ProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  theme: 'white',
  genreId: '',
};

export const UserPreferencesContext = createContext<{
  state: IState;
  // eslint-disable-next-line
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const UserPreferencesProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(userPreferencesReducer, initialState);

  return <UserPreferencesContext.Provider value={{ state, dispatch }}>{children}</UserPreferencesContext.Provider>;
};
