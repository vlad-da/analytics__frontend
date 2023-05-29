import React from 'react';
import ReactDOM from 'react-dom/client';

import Wrapper from './components/main-first/wrapper/Wrapper';
import reportWebVitals from './reportWebVitals';

import './index.css';

import noteSVG from './asserts/note-2.svg';




// Первый компонет

const wrapper = {
  title: 'Общая аналитика',
  titleButton: 'Выгрузить отчет',
  img: noteSVG
}

// Второй компонент

const persent = {
  title: 'Так себе оратор',
  description: 'Тебе необходимо улучшить свои навыки, воспользуйся нашимм рекомендациями!',
  result: 'Общий результат:',
  percent: '34%'
}   

// Третий компонент

const smiles = {
  title: 'Связанность',
  percent: '3%'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper title={wrapper.title} titleButton={wrapper.titleButton} note={wrapper.img} percent={persent} smiles={smiles}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
