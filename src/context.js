import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  darkmode: false,
};

export const ThemeContext = createContext(INITIAL_STATE);

const thmemReducer = (state, action) => {
  if (action.type === 'TOGGLE') {
    return {
      darkmode: !state.darkmode,
    };
  }

  return state;
};

export const DarkmodeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(thmemReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
