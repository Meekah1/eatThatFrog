import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
