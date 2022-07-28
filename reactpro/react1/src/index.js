import React from 'react';
import ReactDOM from 'react-dom/client';
import Co from './Co';
import Ct from './Ct';
import Cth from './Cth';
import Cf from './Cf';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  	<Cf />
    <Co />
    <Ct />
    <Cth />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
