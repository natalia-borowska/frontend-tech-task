import React from 'react';
import styled from '@emotion/styled';
import { grid, GridProps } from 'styled-system';
import { v4 as uuidv4 } from 'uuid';

import { ICategory } from '../../../../types';
import ArticleCard from './ArticleCard';

const Main = styled.main<GridProps>`
  display: grid;
  ${grid}
`;

interface IPropTypes {
  categories: ICategory[];
}

const Articles: React.FC<IPropTypes> = ({categories}) => (
  <Main gridGap="26px" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))">
    {categories.map((category) => {
      return category.categoryArticles.articles.map((article) => {
        return <ArticleCard article={article} key={uuidv4()} />;
      });
    })}
  </Main>
);

export default Articles;
