import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { grid, GridProps, space, SpaceProps } from 'styled-system';

import Articles from './components/Articles';
import CategoriesHeader from './components/CategoriesHeader';
import ErrorMessage from '../../common/ErrorMessage';
import LoadingMessage from '../../common/LoadingMessage';
import Sidebar from './components/Sidebar';
import { ICategory } from '../../utils/types';

type ContentProps = GridProps & SpaceProps;

const ArticleListWrapper = styled.div<GridProps>`
  display: grid;
  ${grid}
`;

const Content = styled.div<ContentProps>`
  ${grid}
  ${space}
`;

const ArticleList: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [fetchingError, setFetchingError] = useState(false);

  useEffect(() => {
    axios.post("/graphql", {
      query: `{
        categories(ids: "156126", locale: de_DE) {
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
    <ArticleListWrapper
      data-test="articleListComponent"
      gridGap="20px"
      gridTemplateColumns="160px auto"
    >
      <Sidebar categories={categories} />

      {fetchingError ?
        <ErrorMessage message="Sorry, there was a problem with loading your request, please try again." />
        :
        <Content p="10px" gridColumn={['1 / 4', 'auto', 'auto']}>
          {categories.length ?
            <>
              <CategoriesHeader categoryName={categories[0].name} articleCount={categories[0].articleCount} />
              <Articles categories={categories} />
            </>
          : 
            <LoadingMessage />
          }
        </Content>
      }
      
    </ArticleListWrapper>
  );
}

export default ArticleList;
