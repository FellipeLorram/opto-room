import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import CreateGlobalStyle from './styles/GlobalStyles';

import UsePersistedState from './Utils/UsePersistedState';

import Principal from './styles/themes/Principal';
// import dark from './styles/themes/dark';
import Routes from './Routes';
import history from './Services/history';
import store, { persistor } from './store';
import LoadingContextProvider from './Utils/Contexts/Loading';


function App() {
  const [theme] = UsePersistedState('theme', Principal);
  const [isLoading, setIsLoading] = useState(false);

  // const toggleTheme = useCallback(() => {
  //   setTheme(theme.title === 'Principal' ? dark : Principal);
  // }, [theme.title, setTheme]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <LoadingContextProvider.Provider value={{isLoading, setIsLoading}}>
              <CreateGlobalStyle />
              <Routes />
            </LoadingContextProvider.Provider>
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );

}

export default App;
