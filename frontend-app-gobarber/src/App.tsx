import React from 'react';
import GlobalStyles from './Styles/global';
import SignIn from './Pages/SignIn/index';
//import SingUp from './Pages/SignUp/index';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyles />
  </>
);
export default App;
