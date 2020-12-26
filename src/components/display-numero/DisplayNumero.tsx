import React from 'react';
import { Box, Flex } from 'bumbag';
import { connect } from 'react-redux';
import { NumeroChamadoDisplay } from './DisplayNumero.style';
import { sortearUmNumero } from '../../redux/actions/index';
import { getRandomInRange } from '../../utils/utils';

function DisplayNumero(store: any) {
  const { sorteioCorrenteState, dispatch } = store;

  return (
    <Flex alignX="center" alignY="center" height="auto">
      <NumeroChamadoDisplay
        palette="warning"
        variant="outlined"
        borderRadius="100%"
        onClick={() => {
          if (sorteioCorrenteState.numeros.length) {
            const indexSorteado = getRandomInRange(sorteioCorrenteState.numeros.length);
            dispatch(sortearUmNumero(indexSorteado));
          }
        }}
      >
        {sorteioCorrenteState.numerosChamados[0] ?? 'go!'}
      </NumeroChamadoDisplay>
    </Flex>
  );
}

const mapStateToProps = (store: any) => ({
  sorteioCorrenteState: store.sorteioCorrente,
});

export default connect(mapStateToProps)(DisplayNumero);
