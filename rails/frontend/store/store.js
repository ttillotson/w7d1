import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';

const configStore = (createStore(rootReducer, applyMiddleware(thunk, logger)));

export default configStore;
