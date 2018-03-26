import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configStore from './store/store';
import { allTodos } from './reducers/selectors';



document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={ configStore } />, content);
});
