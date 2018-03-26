import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const configStore = (createStore(rootReducer, applyMiddleware(logger)));

export default configStore;
