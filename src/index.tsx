import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { isMobile } from 'react-device-detect';
import BoardMobileApp from './BoardMobileApp';
import BoardWebApp from './BoardWebApp';

ReactDOM.render(
  <React.StrictMode>
    {isMobile ? <BoardMobileApp /> : <BoardWebApp />}
  </React.StrictMode>,
  document.getElementById('root'),
);
