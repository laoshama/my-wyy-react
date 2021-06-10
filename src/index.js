import React from 'react';
import ReactDOM from 'react-dom';

import '@/assets/css/reset.css'

import { BrowserRouter } from 'react-router-dom'
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

