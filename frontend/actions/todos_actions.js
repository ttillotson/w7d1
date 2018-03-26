export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
// export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});


export const receiveTodo = (id, title, body) => ({
  type: RECEIVE_TODO,
  data: {id,
        title,
        body,
        done: false}
});

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
