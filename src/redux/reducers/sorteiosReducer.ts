import Sorteio from '../../models/Sorteio';
import { SORTEIO_SALVAR } from '../actions/actions.const';
import { setStorage, getStorage } from '../../utils/storage';

const storageSorteios = getStorage('sorteios');

const initialState: Sorteio[] = storageSorteios ?? [];

type ActionSalvar = { type: number; payload: { sorteio: Sorteio } };

export const sorteiosReducer = (stateSorteios = initialState, action: ActionSalvar) => {
  console.log(stateSorteios, action);
  let newState: Sorteio[];
  switch (action.type) {
    case SORTEIO_SALVAR:
      newState = [...stateSorteios, action.payload.sorteio];
      break;
    default:
      newState = stateSorteios;
  }

  setStorage('sorteios', newState);
  return newState;
};
