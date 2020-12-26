import { Drawer, List, applyTheme, Box } from 'bumbag';

export const DrawerDisclosure = applyTheme(Drawer.Disclosure, {
  styles: {
    base: {
      textAlign: 'left',
      width: '61.8%',
      paddingY: 'major-2',
      paddingX: 'major-4',
      backgroundColor: 'danger',
      color: 'primaryTint',
      borderRadius: '0 0 20px 0',
      cursor: 'pointer',
    },
  },
});

export const DisplayTituloSorteioCorrente = applyTheme(Box, {
  styles: {
    base: {
      opacity: '0.7',
      width: 'fit-content',
      maxWidth: '50%',
      backgroundColor: 'danger',
      borderRadius: '0 0 20px 0',
      padding: 'major-2',
      color: 'primaryTint',
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
      height: '100%',
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
    },
  },
});
