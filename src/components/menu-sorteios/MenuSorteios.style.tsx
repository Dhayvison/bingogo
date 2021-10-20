import { Drawer, List, applyTheme, Box, Text } from 'bumbag';

export const DrawerDisclosure = applyTheme(Drawer.Disclosure, {
  styles: {
    base: {
      padding: 'major-2',
      backgroundColor: 'danger',
      color: 'primaryTint',
      cursor: 'pointer',
    },
  },
});

export const DisplayTituloSorteioCorrente = applyTheme(Box, {
  styles: {
    base: {
      width: 'fit-content',
      backgroundColor: 'danger800',
      padding: 'major-2',
      fontWeight: 'bolder',
    },
  },
});

export const DrawerStyled = applyTheme(Drawer, {
  styles: {
    base: {
      paddingY: 'major-4',
      paddingX: 'major-4',
      borderRadius: '0 20px 0 0',
      maxWidth: '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
  },
});

export const SorteioList = applyTheme(List, {
  styles: {
    base: {
      width: '100%',
      height: '70%',
      overflowY: 'scroll',
    },
  },
});

export const SorteioListItem = applyTheme(Drawer.Disclosure, {
  styles: {
    base: {
      display: 'block',
      padding: '10px',
      border: '1px solid gray',
      borderRadius: '5px',
      margin: '15px 0',
      cursor: 'pointer',
      color: 'text',
      fontWeight: 'bolder',
    },
  },
});
