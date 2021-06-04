import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './Styles/global';
import Routes from './routes';


import AppProvider from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyles />
  </BrowserRouter>
);
export default App;
