import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { border, BorderProps, color, ColorProps, flexbox, FlexboxProps, space, SpaceProps, typography, TypographyProps } from 'styled-system';

import { IArticle } from '../../../../../types';
import { formatter } from '../../../../../utils';

type ArticleProps = BorderProps & FlexboxProps & SpaceProps;
type ButtonProps = BorderProps & ColorProps & SpaceProps & TypographyProps;

const Article = styled.article<ArticleProps>`
  display: flex;
  ${border}
  ${flexbox}
  ${space}
  
  & > * {
    display: inline-block;
    padding: 4px 0;
    margin: 4px 0;
    width: 100%;
  };
`;

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  ${border}
  ${color}
  ${space}
  ${typography}
`;

interface IPropTypes {
  article: IArticle;
}

const ArticleCard: React.FC<IPropTypes> = ({article}) => {
  const computedPrice = () => {
    return formatter.format(article.prices.regular.value / 100);
  }
  const price = useMemo<string>(computedPrice, [article.prices.regular.value]);

  return (
    <Article
      border={1}
      borderColor="lavenderblush"
      borderStyle="solid"
      flexDirection="column"
      justifyContent="space-between"
      p={10}
    >
      <img alt="product" src={article.images[0].path} />
      <p>{article.name}</p>
      <p>{price}</p>
      <Button
        bg="lightgoldenrodyellow"
        border={1}
        borderColor="lightgray"
        borderStyle="solid"
        p=".2em"
        role="button"
        textAlign="center"
      >
        Add to cart
      </Button>
    </Article>
  )
};

export default ArticleCard;
