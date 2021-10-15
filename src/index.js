import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { DarkmodeProvider } from './context';

const theme = {
  colors: {
    main: '#15023a',
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <DarkmodeProvider>
      <App />
    </DarkmodeProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
