import React, {useMemo} from 'react';

import { Article } from '../../../../../types';
import { formatter } from '../../../../../utils';

interface IPropTypes {
  article: Article
}

const ArticleCard: React.FC<IPropTypes> = ({article}) => {
  const computedPrice = () => {
    return formatter.format(article.prices.regular.value / 100);
  }
  const price = useMemo<string>(computedPrice, [article.prices.regular.value]);

  return (
    <article className={'article'}>
      <img src={article.images[0].path} />
      <p>{article.name}</p>
      <p>{price}</p>
      <button role="button">Add to cart</button>
    </article>
  )
};

export default ArticleCard;
