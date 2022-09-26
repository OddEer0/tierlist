import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { tierBoards } from './state/ToF';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App data={tierBoards}/>
)