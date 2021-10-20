import * as React from 'react';
import { Switch, useColorMode } from 'bumbag';

function SwitchColorMode() {
  const { colorMode, setColorMode } = useColorMode();
  return (
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
  );
}

export { SwitchColorMode };
