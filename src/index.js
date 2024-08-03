import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/ubuntu"; 
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/400-italic.css"; 
import "@fontsource/ubuntu/500.css";
import { theme } from "./Theme/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ChakraProvider theme={theme}>

    <App />
  </ChakraProvider>,
  </React.StrictMode>
);

