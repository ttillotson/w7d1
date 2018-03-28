import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configStore from './store/store';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './actions/todos_actions';



document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  window.store = configStore;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store={ configStore } />, content);
});
