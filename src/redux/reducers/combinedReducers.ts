import { sorteiosReducer } from './sorteiosReducer';
import { sorteioCorrenteReducer } from './sorteioCorrenteReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  sorteioCorrente: sorteioCorrenteReducer,
  sorteiosState: sorteiosReducer,
});
