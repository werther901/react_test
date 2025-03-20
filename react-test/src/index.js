import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MainPage from './MainPage';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 메인 첫번째 */}
    <Main />
  </React.StrictMode>
);

// reportWebVitals();
