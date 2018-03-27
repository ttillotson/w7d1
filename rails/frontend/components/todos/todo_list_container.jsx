import React from 'react';
import TodoList from './todo_list';
import { connect } from 'react-redux';
import { RECEIVE_TODO, RECEIVE_TODOS,
         receiveTodo, receiveTodos } from '../../actions/todos_actions';
import { allTodos  } from '../../reducers/selectors';


const mapStatetoProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (id, title, body) => dispatch(receiveTodo(id, title, body))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(TodoList);
