import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch } from 'react-router-dom';
import { color, ColorProps, grid, GridProps, space, SpaceProps } from 'styled-system';

import AppHeader from '../../components/AppHeader';
import ArticleList from '../../components/ArticleList';
import GenericErrorBoundary from '../../common/GenericErrorBoundary';
import PageNotFound from '../../components/PageNotFound';

type FooterProps = ColorProps & GridProps & SpaceProps;
type PageProps = GridProps & SpaceProps;

const Footer = styled.footer<FooterProps>`
  text-align: center;
  ${color}
  ${grid}
  ${space}
`;

const Page = styled.div<PageProps>`
  display: grid;
  ${grid}
  ${space}
`;

const AppWrapper: React.FC = () => {
  return (
    <div>
      <Page
        data-test="appWrapperComponent"
        gridGap="20px"
        gridTemplateAreas="'header' 'content' 'footer'"
        m="6px"
      >
        <AppHeader />
        
        <Switch>
          <Route exact path="/">
            <GenericErrorBoundary><ArticleList /></GenericErrorBoundary>
          </Route>
          <Route path="/kategorie">
            <GenericErrorBoundary><ArticleList /></GenericErrorBoundary>
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>

        <Footer
          bg="lightblue"
          data-test="appFooter"
          gridArea="footer"
          p="10px"
        >
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
        </Footer>
      </Page>
    </ div>
  );
}

export default AppWrapper;
