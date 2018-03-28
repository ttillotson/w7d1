export const fetchTodos = () => (
  $.ajax({
    url: '/api/todos',
    method: 'GET',
  })
);

export const createTodo = (todoParams) => (
  $.ajax({
    url: '/api/todos',
    method: 'POST',
    data: { todo: todoParams },
  })
);
