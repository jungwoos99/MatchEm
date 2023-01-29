import React from 'react';
import App from './App'
import {createRoot} from 'react-dom/client'
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);