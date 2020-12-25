import Sorteio from '../../models/Sorteio';
import { SORTEIO_SALVAR, SORTEIO_SET_CORRENTE } from './actions.const';

export const salvarSorteio = (sorteioTitulo: string) => ({
  type: SORTEIO_SALVAR,
  payload: {
    sorteio: new Sorteio(sorteioTitulo),
  },
});

export const setSorteioCorrente = (sorteio: Sorteio) => ({
  type: SORTEIO_SET_CORRENTE,
  payload: {
    sorteio,
  },
});
