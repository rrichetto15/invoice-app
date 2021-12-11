import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

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

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(getUserPreferredTheme());
  const [showModal, setShowModal] = useState(false);

  const changeTheme = () => {
    theme === 'theme-light' ? setTheme('') : setTheme('theme-light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  const value = { theme, changeTheme, showModal, toggleModal };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
