import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './redux/state';

  // ~~~~~~~~~~~~~~~~~~~~ Render ~~~~~~~~~~~~~~~~~~~ //


ReactDOM.render(
    <App data={data}/>,
  document.getElementById('root')
);