import React from 'react';
import {v4 as uuidv4 } from 'uuid';

import { Category } from '../../../../types';
import ArticleCard from './ArticleCard';

interface IPropTypes {
  categories: Category[];
}

const Articles: React.FC<IPropTypes> = ({categories}) => (
  <main className={'articles'}>
    {categories.map((category) => {
      return category.categoryArticles.articles.map((article) => {
        return <ArticleCard article={article} key={uuidv4()} />;
      });
    })}
  </main>
);

export default Articles;
