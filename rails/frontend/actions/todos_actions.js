export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as TodoApi from '../util/todo_api_util';
// export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});


export const receiveTodo = (data) => ({
  type: RECEIVE_TODO,
  data
});

// export const fetchTodos = () => {
//   return function (dispatch) {
//     TodoApi.fetchTodos().then(todos => {
//       dispatch(receiveTodos(todos));
//     });
//   };
// };

export const fetchTodos = () => dispatch => (
  TodoApi.fetchTodos().then(todos => {
    dispatch(receiveTodos(todos));
  })
);

export const createTodo = (todoParams) => {
  return function (dispatch) {
    return TodoApi.createTodo(todoParams).then(todo => (
      dispatch(receiveTodo(todoParams))
    ));
  };
};

// export const









// export const removeTodo = (title, body) => ({
//   type: REMOVE_TODO,
//   title,
//   body,
//   done: true
// });
// const postTodo = (todo) => (dispatch) => {
//   APIUtil.postTodo(todo).then((response) => dispatch(receiveTodo(response))
//   , err=> console.log(err);)
// };
