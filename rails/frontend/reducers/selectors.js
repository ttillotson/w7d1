


export function allTodos (state) {
  let todoIds =  Object.keys(state.todos);
  // debugger
  return todoIds.map((todoId) => {
    return state.todos[todoId];
  });
}
