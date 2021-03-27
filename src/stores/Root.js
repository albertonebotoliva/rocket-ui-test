import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import rocketCollection from './rocketCollectionReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketCollection
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
