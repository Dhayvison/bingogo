import React from 'react';
import { Badge, Columns, Show, Tag } from 'bumbag';
import { connect } from 'react-redux';
import { NumeroChamadoDisplay, NumerosChamadosGrid } from './DisplayNumero.style';
import { sortearUmNumero } from '../../redux/actions/index';
import { getRandomInRange, compareLikeNumber } from '../../utils/utils';

function DisplayNumero(store: any) {
  const { sorteioCorrenteState, dispatch } = store;
  const numerosRestantes = sorteioCorrenteState.numeros.length;
  const ultimoChamado = sorteioCorrenteState.numerosChamados[0];

  return (
    <Columns isGapless marginTop="major-4">
      <Columns.Column alignX="center" padding="major-4">
        <NumeroChamadoDisplay
          palette="warning"
          variant="outlined"
          onClick={() => {
            if (numerosRestantes) {
              const indexSorteado = getRandomInRange(numerosRestantes);
              dispatch(sortearUmNumero(indexSorteado));
            }
          }}
        >
          {ultimoChamado ?? 'go!'}
          <Badge isAttached palette={numerosRestantes ? 'warning' : 'danger'} size="large">
            {numerosRestantes ? numerosRestantes : '0'}
          </Badge>
        </NumeroChamadoDisplay>
      </Columns.Column>
      <Show above="tablet">
        <Columns.Column>
          <NumerosChamadosGrid wrapFlow="wrap">
            {[...sorteioCorrenteState.numerosChamados]
              .sort(compareLikeNumber)
              .map((numero: string) => {
                return (
                  <Tag
                    key={numero}
                    palette={ultimoChamado === numero ? 'warning' : 'default'}
                    size="large"
                  >
                    {numero}
                  </Tag>
                );
              })}
          </NumerosChamadosGrid>
        </Columns.Column>
      </Show>
    </Columns>
  );
}

const mapStateToProps = (store: any) => ({
  sorteioCorrenteState: store.sorteioCorrente,
});

export default connect(mapStateToProps)(DisplayNumero);
