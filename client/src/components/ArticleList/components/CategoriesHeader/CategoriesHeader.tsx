import React from 'react';

interface IPropTypes {
  articleCount: number;
  categoryName: string;
}

const CategoriesHeader: React.FC<IPropTypes> = ({articleCount, categoryName}) => (
  <header>
    <h1>
      {categoryName}
      <small>({articleCount})</small>
    </h1>
  </header>
);

export default CategoriesHeader;
