import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

import CreateGlobalStyle from './styles/GlobalStyles';

import UsePersistedState from './Utils/UsePersistedState';

import Principal from './styles/themes/Principal';
// import dark from './styles/themes/dark';
import Routes from './Routes';
import history from './Services/history';


function App() {
  const [theme, setTheme] = UsePersistedState('theme', Principal);

  // const toggleTheme = useCallback(() => {
  //   setTheme(theme.title === 'Principal' ? dark : Principal);
  // }, [theme.title, setTheme]);

  return (

    <Router history={history}>
      <ThemeProvider theme={theme}>
        <CreateGlobalStyle />
        <Routes />
      </ThemeProvider>
    </Router>

  );

}

export default App;
