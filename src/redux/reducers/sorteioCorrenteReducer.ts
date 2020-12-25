import Sorteio from '../../models/Sorteio';
import { SORTEIO_SET_CORRENTE } from '../actions/actions.const';
import { setStorage, getStorage } from '../../utils/storage';

const storageSorteioCorrente = getStorage('sorteioCorrente');

const initialState: Sorteio = storageSorteioCorrente ?? {
  id: -1,
  titulo: 'Vamos começar!',
  numeros: [],
};

type ActionSetCorrente = { type: number; payload: { sorteio: Sorteio } };

export const sorteioCorrenteReducer = (
  stateSorteioCorrente = initialState,
  action: ActionSetCorrente
) => {
  let newState: Sorteio;
  switch (action.type) {
    case SORTEIO_SET_CORRENTE:
      newState = action.payload.sorteio;
      break;
    default:
      newState = stateSorteioCorrente;
  }

  setStorage('sorteioCorrente', newState);
  return newState;
};
