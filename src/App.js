import React from 'react';
import { Provider as FetchProvider } from 'use-http';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Router from './utils/router';
import theme from './utils/theme';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FetchProvider url='https://jsonplaceholder.typicode.com'>
        <BrowserRouter>
          <MainLayout>
            <Router />
          </MainLayout>
        </BrowserRouter>
      </FetchProvider>
    </ThemeProvider>
  );
}

export default App;
