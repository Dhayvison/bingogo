import React from 'react';
import { connect } from 'react-redux';
import { Box, Button, Drawer, Group, Heading, Input, useColorMode, Switch, Text } from 'bumbag';
import { salvarSorteio, setSorteioCorrente } from '../../redux/actions';
import Sorteio from '../../models/Sorteio';
import {
  DrawerStyled,
  SorteioList,
  DrawerDisclosure,
  SorteioListItem,
  DisplayTituloSorteioCorrente,
} from './MenuSorteios.style';

function MenuSorteios(store: any) {
  const { colorMode, setColorMode } = useColorMode();
  const { sorteiosState, sorteioCorrenteState, dispatch } = store;
  const [inputSorteio, setInputSorteio] = React.useState('');

  function onSave(event: React.FormEvent) {
    event.preventDefault();
    dispatch(salvarSorteio(inputSorteio));
  }

  return (
    <Drawer.State animated baseId="menuSorteios">
      <DrawerDisclosure>
        <Heading use="h2">☰ BINGO go!</Heading>
      </DrawerDisclosure>

      <DisplayTituloSorteioCorrente>
        <Heading use="h4">{sorteioCorrenteState.titulo}</Heading>
      </DisplayTituloSorteioCorrente>

      <DrawerStyled fade slide>
        <Switch
          state="primary"
          defaultChecked={colorMode === 'dark'}
          label={colorMode === 'default' ? '☀️' : '🌙'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const isChecked = event.target.checked;
            if (isChecked) {
              setColorMode('dark');
            } else {
              setColorMode('default');
            }
          }}
        />

        <Heading>Sorteios</Heading>

        <SorteioList>
          {sorteiosState.map((item: Sorteio) => {
            return (
              <SorteioListItem
                key={item.id}
                onClick={() => {
                  dispatch(setSorteioCorrente(item));
                }}
              >
                <Heading color={colorMode === 'dark' ? 'primaryTint' : 'black'} use="h5">
                  {item.titulo}
                </Heading>
              </SorteioListItem>
            );
          })}
        </SorteioList>
        <Box>
          <form onSubmit={onSave}>
            <Group>
              <Input
                value={inputSorteio}
                placeholder="Título do bingo..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputSorteio(e.target.value)
                }
              />
              <Button type="submit">Salvar</Button>
            </Group>
          </form>
        </Box>
      </DrawerStyled>
    </Drawer.State>
  );
}

const mapStateToProps = (store: any) => ({
  sorteiosState: store.sorteiosState,
  sorteioCorrenteState: store.sorteioCorrente,
});

export default connect(mapStateToProps)(MenuSorteios);
