import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextComponent } from './getuserpage/index/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextComponent>
    <App />
  </ContextComponent>
);