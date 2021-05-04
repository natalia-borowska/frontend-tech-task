import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { color, ColorProps, flexbox, FlexboxProps, grid, GridProps, space, SpaceProps } from 'styled-system';

type HeaderProps = ColorProps & GridProps & FlexboxProps & SpaceProps;

const Header = styled.header<HeaderProps>`
  display: flex;
  ${color}
  ${grid}
  ${flexbox}
  ${space}
`;

const HeaderSearch = styled.input`
  &:focus {
    outline: none;
  }
`;

const LinkStyled = styled(Link)<ColorProps>`
  text-decoration: none;
  ${color}
  &:active, &:focus, &:visited {
    color: black;
  }
`;

const AppHeader: React.FC = () => {
  return (
    <Header
      bg="lightblue"
      data-test="appHeader"
      gridArea="header"
      justifyContent="space-between"
      p="10px"
    >
      <LinkStyled data-test="logo" to="/">
        <strong>home24</strong>
      </LinkStyled>
      <HeaderSearch placeholder="Search" />
    </Header>
  );
}

export default AppHeader;
