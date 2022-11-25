import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { MainContext } from './context/MainContext';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainContext.Provider value={{ store }}>
    <BrowserRouter>
      <Provider value={{ store }}>
        <App />
      </Provider>
    </BrowserRouter>
  </MainContext.Provider>
);
