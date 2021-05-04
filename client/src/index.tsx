import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { ThemeProvider } from 'styled-components';

import AppWrapper from './containers/AppWrapper';
import theme from './utils/theme';

const NotFound: React.FC = () => (
  <span>Not found</span>
)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={css`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `} />
      <Router>
        <AppWrapper />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
