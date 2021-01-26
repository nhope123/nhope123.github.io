import {createStore,combineReducers} from 'redux';
import {projectSelectionReducer} from './actions/project-display-actions.js';

export const store = createStore(
  combineReducers({
    selection: projectSelectionReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
