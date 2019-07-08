import React from 'react';

import AppNav from './components/AppNav';
import Decorator from './components/Decorator';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNav />
        <Decorator />
      </div>
    </Provider>
  );
}

export default App;
