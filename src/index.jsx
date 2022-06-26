import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase.context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);