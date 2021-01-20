import { applyTheme, Box, Button } from 'bumbag';

export const NumeroChamadoDisplay = applyTheme(Button, {
  styles: {
    base: {
      width: '20rem',
      height: '20rem',
      borderRadius: '50% 0 100% 100% ',
      backgroundColor: 'primaryTint',
      fontSize: '20rem',
    },
  },
});

export const NumerosChamadosGrid = applyTheme(Box, {
  styles: {
    base: {
      display: 'grid',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gridTemplateRows: 'repeat(8, 1fr)',
      gridGap: '5px',
      borderRadius: '7',
      backgroundColor: 'default',
    },
  },
});

export const NumeroChamadoItemList = applyTheme(Box, {
  styles: {
    base: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'nowrap',
      borderRadius: '100%',
      minWidth: '5rem',
      width: '5rem',
      height: '5rem',
      backgroundColor: 'warningTint',
      color: 'default',
      fontSize: '2rem',
      marginRight: '1rem',
    },
  },
});
