import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const getUserPreferredTheme = () => {
  let theme = '';

  const darkPreferred =
    // check if browser supports .matchMedia
    // then check color scheme preference
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark').matches;

  const lightPreferred =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light').matches;

  if (darkPreferred) {
    theme = '';
  } else if (lightPreferred) {
    theme = 'theme-light';
  }

  return theme;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getUserPreferredTheme());

  const changeTheme = () => {
    theme === 'theme-light' ? setTheme('') : setTheme('theme-light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const value = { theme, changeTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
