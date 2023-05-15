import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as ReactDOMClient from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './shared/router';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept()