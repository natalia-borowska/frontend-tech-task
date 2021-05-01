import React from 'react';

import { Category } from '../../../../types';

interface IPropTypes {
  categories: Category[];
}

const Sidebar: React.FC<IPropTypes> = (props) => (
  <div className={'sidebar'}>
    <h3>Kategorien</h3>
    {props.categories.length ? (
      <ul>
        {props.categories[0].childrenCategories.map(({ name, urlPath }) => {
          return (
            <li>
              <a href={`/${urlPath}`}>{name}</a>
            </li>
          );
        })}
      </ul>
    ) : (
      'Loading...'
    )}
  </div>
);

export default Sidebar;
