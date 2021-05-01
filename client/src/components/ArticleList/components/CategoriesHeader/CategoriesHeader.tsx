import React from 'react';

interface IPropTypes {
  articleCount: number;
  categoryName: string;
}

const CategoriesHeader: React.FC<IPropTypes> = (props) => (
  <h1>
    {props.categoryName}
    <small>({props.articleCount})</small>
  </h1>
);

export default CategoriesHeader;
