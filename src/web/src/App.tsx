import React, { useReducer, FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import './App.css';
import { DarkTheme as Theme } from './ux/theme';
import { AppContext, ApplicationState, getDefaultState } from './models/applicationState';
import appReducer from './reducers';
import { TodoContext } from './components/todoContext';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { ThemeProvider } from '@fluentui/react';
import Telemetry from './components/telemetry';

export const App: FC = () => {
  const defaultState: ApplicationState = getDefaultState();
  const [applicationState, dispatch] = useReducer(appReducer, defaultState);
  const initialContext: AppContext = { state: applicationState, dispatch: dispatch }

  initializeIcons();

  return (
    <ThemeProvider applyTo="body" theme={Theme}>
      <TodoContext.Provider value={initialContext}>
        <BrowserRouter>
          <Telemetry>
            <Layout />
            Hello World
          </Telemetry>
        </BrowserRouter>
      </TodoContext.Provider>
    </ThemeProvider>
  );
};
