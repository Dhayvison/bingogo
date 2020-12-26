import { applyTheme, Button } from 'bumbag';

export const NumeroChamadoDisplay = applyTheme(Button, {
  styles: {
    base: {
      margin: '15vh auto',
      width: '20rem',
      height: '20rem',
      backgroundColor: 'primaryTint',
      fontSize: '20rem',
    },
  },
});
