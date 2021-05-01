import React from 'react';

import { Article, Category } from '../../../../types';
import ArticleCard from './ArticleCard';

interface IPropTypes {
  categories: Category[];
}

const Articles: React.FC<IPropTypes> = (props) => (
  <div className={'articles'}>
    {props.categories.map((category) => {
      return category.categoryArticles.articles.map((article) => {
        return <ArticleCard article={article} />;
      });
    })}
  </div>
);

export default Articles;
