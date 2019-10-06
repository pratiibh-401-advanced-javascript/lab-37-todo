import {createStore, combineReducers} from "redux";

import playerReducer from './todo.store.js';

let reducers = combineReducers({
  players: playerReducer
});

export default () => createStore(reducers);
