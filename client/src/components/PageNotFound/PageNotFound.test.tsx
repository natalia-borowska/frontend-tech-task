import React from 'react';
import {shallow} from 'enzyme';

import PageNotFound from './PageNotFound';
import {findByTestAttribute} from '../../utils/testUtils';

it('renders PageNotFound', () => {
  const wrapper = shallow(<PageNotFound />);
  const pageNotFoundComponent = findByTestAttribute(wrapper, 'pageNotFoundComponent');

  expect(pageNotFoundComponent.length).toBe(1);
});
