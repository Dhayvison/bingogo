import React from 'react';
import { Badge, Columns, Flex, Show, Tag } from 'bumbag';
import { connect } from 'react-redux';
import {
  NumeroChamadoDisplay,
  NumerosChamadosGrid,
  NumeroChamadoItemList,
} from './DisplayNumero.style';
import { sortearUmNumero } from '../../redux/actions/index';
import { getRandomInRange, compareLikeNumber } from '../../utils/utils';

function DisplayNumero(store: any) {
  const { sorteioCorrenteState, dispatch } = store;
  const numerosRestantes = sorteioCorrenteState.numeros.length;
  const ultimoChamado = sorteioCorrenteState.numerosChamados[0];

  return (
    <>
      <Columns isGapless height="80vh">
        <Columns.Column alignX="center" alignY="center" marginX="auto">
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
            <NumerosChamadosGrid>
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
        <Columns.Column
          spread={12}
          padding="major-4"
          backgroundColor="danger"
          height="min-content"
          alignSelf="flex-end"
        >
          <Flex overflowX="scroll" borderRadius="6">
            {sorteioCorrenteState.numerosChamados.map((numero: string) => {
              return <NumeroChamadoItemList key={numero}>{numero}</NumeroChamadoItemList>;
            })}
          </Flex>
        </Columns.Column>
      </Columns>
    </>
  );
}

const mapStateToProps = (store: any) => ({
  sorteioCorrenteState: store.sorteioCorrente,
});

export default connect(mapStateToProps)(DisplayNumero);
