import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';
import { ThemeProvider } from 'styled-components';

import ArticleList from './components/ArticleList';
import theme from './utils/theme';

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
      <ArticleList />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
