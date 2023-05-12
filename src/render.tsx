import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

  // ~~~~~~~~~~~~~~~~~~~~ Render ~~~~~~~~~~~~~~~~~~~ //

export const rerenderTree = (data, addPostData, updatePostText) => {

  ReactDOM.render(
    <App data={data} addPostData={addPostData} updatePostText={updatePostText}/>,
    document.getElementById('root')
    );
  }