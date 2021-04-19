import React from 'react';
import { enableScreens} from 'react-native-screens'
import { Provider } from 'react-redux';
import InitialNavigation from './reja/navigation/RejaNavigation';

import { store } from './reja/redux'

enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <InitialNavigation />
    </Provider>
  );
}

export default App;