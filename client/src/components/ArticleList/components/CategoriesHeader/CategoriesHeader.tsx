import React from 'react';
import styled from '@emotion/styled';
import { space, SpaceProps } from 'styled-system';

interface IPropTypes {
  articleCount: number;
  categoryName: string;
}

const Small = styled.small<SpaceProps>`
  ${space}
`;

const CategoriesHeader: React.FC<IPropTypes> = ({articleCount, categoryName}) => (
  <header data-test="categoriesHeaderComponent">
    <h1 data-test="categoriesHeader">
      {categoryName}
      <Small ml="5px">({articleCount})</Small>
    </h1>
  </header>
);

export default CategoriesHeader;
