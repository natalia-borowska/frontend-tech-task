import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { color, ColorProps, flexbox, FlexboxProps, grid, GridProps, space, SpaceProps } from 'styled-system';

import { ICategory } from '../../types';
import Articles from './components/Articles';
import CategoriesHeader from './components/CategoriesHeader';
import ErrorMessage from '../../common/ErrorMessage';
import LoadingMessage from '../../common/LoadingMessage';
import Sidebar from './components/Sidebar';

type FooterProps = ColorProps & GridProps;
type HeaderProps = ColorProps & GridProps & FlexboxProps;
type PageProps = GridProps & SpaceProps;

const Content = styled.div<GridProps>`
  ${grid}
`;

const Footer = styled.footer<FooterProps>`
  text-align: center;
  ${color}
  ${grid}
`;

const Header = styled.header<HeaderProps>`
  display: flex;
  ${color}
  ${grid}
  ${flexbox}
`;

const HeaderSearch = styled.input`
  &:focus {
    outline: none;
  }
`;

const Page = styled.div<PageProps>`
  display: grid;
  ${grid}
  ${space}
  & > * {
    padding: 10px;
  }
`;

const ArticleList: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [fetchingError, setFetchingError] = useState(false);

  useEffect(() => {
    axios.post('/graphql', {
      query: `{
        categories(ids: '156126', locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`
    }).then(response => {
      setCategories(response.data.data.categories);
    }).catch(error => {
      setFetchingError(true);
    });
  }, []);

  return (
    <Page
      gridGap="20px"
      gridTemplateColumns="160px auto auto"
      gridTemplateAreas="'header header header' 'sidebar content content' 'footer footer footer'"
      m="6px"
    >
      <Header
        bg="lightblue"
        gridArea="header"
        justifyContent="space-between"
      >
        <strong>home24</strong>
        <HeaderSearch placeholder="Search" />
      </Header>

      <Sidebar categories={categories} />

      <Content gridArea="content" gridColumn="span 2">
        {categories.length ?
          <CategoriesHeader categoryName={categories[0].name} articleCount={categories[0].articleCount} />
        : 
          fetchingError ?
            <ErrorMessage message="Sorry, there was a problem with loading your request, please try again." />
            :
            <LoadingMessage />
        }
        <Articles categories={categories} />
      </Content>

      <Footer bg="lightblue" gridArea="footer">
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
      </Footer>
    </Page>
  );
}

export default ArticleList;
