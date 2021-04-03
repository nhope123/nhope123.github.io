import {createStore,combineReducers} from 'redux';
import {projectSelectionReducer} from './actions/project-display-actions.js';
//import {default as contactReducer} from './actions/contact_action.js';
import contactSlice from './actions/contact_action.js';
console.log('in store.js');
//console.log(contactSlice.reducer);

export const store = createStore(
  combineReducers({
    selection: projectSelectionReducer,
    contact: contactSlice.reducer //contactReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
