import { createStore } from 'redux';
import { Reducers } from './reducers/combinedReducers';

export const Store = createStore(Reducers);
