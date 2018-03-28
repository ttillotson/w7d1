import React from 'react';
import TodoList from './todo_list';
import { connect } from 'react-redux';
import { RECEIVE_TODO, RECEIVE_TODOS,
         receiveTodo, receiveTodos } from '../../actions/todos_actions';
import { allTodos  } from '../../reducers/selectors';
import { fetchTodos, createTodo } from '../../actions/todos_actions';

const mapStatetoProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  createTodo: (todoParams) => dispatch(createTodo(todoParams)),
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(TodoList);
