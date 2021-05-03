import React from 'react';
import styled from '@emotion/styled';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { color, ColorProps, flexbox, FlexboxProps, grid, GridProps, space, SpaceProps } from 'styled-system';

import ArticleList from '../../components/ArticleList';
import GenericErrorBoundary from '../../common/GenericErrorBoundary';
import PageNotFound from '../../components/PageNotFound';

type FooterProps = ColorProps & GridProps & SpaceProps;
type HeaderProps = ColorProps & GridProps & FlexboxProps & SpaceProps;
type PageProps = GridProps & SpaceProps;

const Footer = styled.footer<FooterProps>`
  text-align: center;
  ${color}
  ${grid}
  ${space}
`;

const Header = styled.header<HeaderProps>`
  display: flex;
  ${color}
  ${grid}
  ${flexbox}
  ${space}
`;

const HeaderSearch = styled.input`
  &:focus {
    outline: none;
  }
`;

const LinkStyled = styled(Link)<ColorProps>`
  text-decoration: none;
  ${color}
  &:active, &:focus, &:visited {
    color: black;
  }
`;

const Page = styled.div<PageProps>`
  display: grid;
  ${grid}
  ${space}
`;

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <Page
        gridGap="20px"
        gridTemplateAreas="'header' 'content' 'footer'"
        m="6px"
      >
        <Header
          bg="lightblue"
          gridArea="header"
          justifyContent="space-between"
          p="10px"
        >
          <LinkStyled to="/">
            <strong>home24</strong>
          </LinkStyled>
          <HeaderSearch placeholder="Search" />
        </Header>
        
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
          gridArea="footer"
          p="10px"
        >
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
        </Footer>
      </Page>
    </ Router>
  );
}

export default AppWrapper;
