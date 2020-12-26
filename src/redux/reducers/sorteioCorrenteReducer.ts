import Sorteio from '../../models/Sorteio';
import { SORTEIO_SET_CORRENTE, SORTEIO_SORTEAR_UM_NUMERO } from '../actions/actions.const';
import { setStorage, getStorage } from '../../utils/storage';

const storageSorteioCorrente = getStorage('sorteioCorrente');

const initialState: Sorteio = storageSorteioCorrente ?? Sorteio.getSorteioVazio();

type ActionSetCorrente = { type: number; payload: any };

export const sorteioCorrenteReducer = (
  stateSorteioCorrente = initialState,
  action: ActionSetCorrente
) => {
  let newState: Sorteio;
  switch (action.type) {
    case SORTEIO_SET_CORRENTE:
      newState = action.payload.sorteio;
      break;
    case SORTEIO_SORTEAR_UM_NUMERO:
      const numeroSorteado = stateSorteioCorrente.numeros[action.payload.indexSorteado];
      const numerosChamados = [numeroSorteado, ...stateSorteioCorrente.numerosChamados];
      stateSorteioCorrente.numeros.splice(action.payload.indexSorteado, 1); // remove o número sorteado
      const numeros = [...stateSorteioCorrente.numeros];
      newState = { ...stateSorteioCorrente, numeros, numerosChamados };
      break;
    default:
      newState = stateSorteioCorrente;
  }

  setStorage('sorteioCorrente', newState);
  return newState;
};
