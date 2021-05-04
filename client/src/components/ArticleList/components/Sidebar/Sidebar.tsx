import React from 'react';
import styled from '@emotion/styled';
import { color, ColorProps, grid, GridProps, space, SpaceProps } from 'styled-system';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

import { IChildCategory } from '../../../../utils/types';
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

const LinkStyled = styled(Link)<ColorProps>`
  text-decoration: none;
  ${color}
  &:active, &:focus, &:visited {
    color: black;
  }
`;

interface IPropTypes {
  categories: IChildCategory[];
}

const Sidebar: React.FC<IPropTypes> = ({categories}) => (
  <Aside
    bg="lavender"
    data-test="sidebarComponent"
    gridColumn={['1 / 4', 1, 1]}
    p="10px"
  >
    <h3>Kategorien</h3>
    {categories.length ? (
      <nav>
        <Ul m={0} p={0}>
          {categories.map(({name, urlPath}) => {
            return (
              <Li
                data-test="categoryListItem"
                key={uuidv4()}
                m="0 0 0 8px"
                p="8px 0"
              >
                <LinkStyled
                  color="black"
                  data-test="categoryLink"
                  to={`/${urlPath}`}
                >
                  {name}
                </LinkStyled>
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
