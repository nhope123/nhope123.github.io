import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import './style/nav.scss';
import {Portfolio} from './Components/portfolio.js';
//import App from './App';
//import store from './app/store';
//import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

      <Portfolio />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

//<Provider store={store}>

//  </Provider>
