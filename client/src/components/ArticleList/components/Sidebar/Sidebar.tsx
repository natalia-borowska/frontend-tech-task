import React from 'react';
import {v4 as uuidv4 } from 'uuid';

import { Category } from '../../../../types';
import LoadingMessage from '../../../../common/LoadingMessage';

interface IPropTypes {
  categories: Category[];
}

const Sidebar: React.FC<IPropTypes> = ({categories}) => (
  <aside className={'sidebar'}>
    <h3>Kategorien</h3>
    {categories.length ? (
      <nav>
        <ul>
          {categories[0].childrenCategories.map(({name, urlPath}) => {
            return (
              <li key={uuidv4()}>
                <a href={`/${urlPath}`}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    )
    :
    <LoadingMessage />
  }
  </aside>
);

export default Sidebar;
