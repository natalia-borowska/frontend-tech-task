import React from 'react';
import styled from '@emotion/styled';
import { space, SpaceProps } from 'styled-system';

const Page = styled.div<SpaceProps>`
  ${space}
  & > * {
    padding: 10px;
  }
`;

const PageNotFound: React.FC = () => (
  <Page data-test="pageNotFoundComponent" m="6px" p="10px">
    <p>Sorry, page not found.</p>
  </Page>
);

export default PageNotFound;
