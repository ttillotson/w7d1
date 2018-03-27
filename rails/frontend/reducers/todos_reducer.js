import { RECEIVE_TODO, RECEIVE_TODOS,
         receiveTodo, receiveTodos } from '../actions/todos_actions';
import merge from 'lodash/merge';

 const initialState = {
   1: {
     id: 1,
     title: 'wash car',
     body: 'with soap',
     done: false
   },
   2: {
     id: 2,
     title: 'wash dog',
     body: 'with shampoo',
     done: true
   },
 };

const todosReducer = (state=initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {

    case RECEIVE_TODOS:
      // const newState = merge({}, state);
      // newState.push(action.todos);
      // return newState;
      newState = action.todos;
      return newState;

    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.data.id] = action.data;
      return newState;

    default:
      return state;
  }
};
export default todosReducer;
