import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ~~~~~~~~~~~~~~~~~~~~ Data ~~~~~~~~~~~~~~~~~~~ //
const data = {
friendsList : [
  {
    id: 1,
    path: "/dialogs/1",
    name: "Олег",
  },
  {
    id: 2,
    path: "/dialogs/2",
    name: "Антон",
  },
  {
    id: 3,
    path: "/dialogs/3",
    name: "Евгений",
  },
  {
    id: 4,
    path: "/dialogs/4",
    name: "Мама",
  },
  {
    id: 5,
    path: "/dialogs/5",
    name: "Алина",
  },
  {
    id: 6,
    path: "/dialogs/6",
    name: "Артур",
  },
  {
    id: 7,
    path: "/dialogs/7",
    name: "Миша",
  },
  {
    id: 8,
    path: "/dialogs/8",
    name: "Арсений",
  },
],

messagesList : [
    {
      messageId: 1,
      messageText: "Привет!",
    },
    {
      messageId: 2,
      messageText: "Как ты?",
    },
    {
      messageId: 3,
      messageText: "Я видел тебя сегодня",
    },
    {
      messageId: 4,
      messageText: "Ты бегал за авокадо!",
    },
    {
      messageId: 5,
      messageText: "Хахао!",
    },
  ],
}

  export default data;


ReactDOM.render(
    <App />,
  document.getElementById('root')
);