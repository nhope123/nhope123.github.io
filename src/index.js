import React from 'react';
import ReactDOM from 'react-dom';
import {Portfolio} from './component/main';

import './style/index.scss';
import './style/bio.scss';
import './style/home.scss';
import './style/project.scss';
import './style/contact.scss';
import './style/nav.scss';
import './style/card.scss';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
