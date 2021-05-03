import React from 'react';
import styled from '@emotion/styled';
import { color, ColorProps, grid, GridProps, space, SpaceProps } from 'styled-system';
import { v4 as uuidv4 } from 'uuid';

import { ICategory } from '../../../../types';
import LoadingMessage from '../../../../common/LoadingMessage';

type AsideProps = ColorProps & GridProps & SpaceProps;

const Aside = styled.aside<AsideProps>`
  ${color}
  ${grid}
  ${space}
`;

const Ul = styled.ul<SpaceProps>`
  ${space}
  list-style-type: none;
`;

const Li = styled.li<SpaceProps>`
  ${space}
`;

const A = styled.a<ColorProps>`
  text-decoration: none;
  ${color}
  &:active, &:focus, &:visited {
    color: black;
  }
`;

interface IPropTypes {
  categories: ICategory[];
}

const Sidebar: React.FC<IPropTypes> = ({categories}) => (
  <Aside
    bg="lavender"
    p="10px"
    gridColumn={['1 / 4', 1, 1]}
  >
    <h3>Kategorien</h3>
    {categories.length ? (
      <nav>
        <Ul m={0} p={0}>
          {categories[0].childrenCategories.map(({name, urlPath}) => {
            return (
              <Li
                key={uuidv4()}
                m="0 0 0 8px"
                p="8px 0"
              >
                <A color="black" href={`/${urlPath}`}>{name}</A>
              </Li>
            );
          })}
        </Ul>
      </nav>
    )
    :
    <LoadingMessage />
  }
  </Aside>
);

export default Sidebar;
