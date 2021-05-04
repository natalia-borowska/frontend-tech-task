import React from 'react';
import { shallow } from 'enzyme';

import LoadingMessage from './LoadingMessage';
import {findByTestAttribute} from '../../utils/testUtils';

it('renders LoadingMessage', () => {
  const wrapper = shallow(<LoadingMessage />);
  const loadingMessageComponent = findByTestAttribute(wrapper, 'componentLoadingMessage');

  expect(loadingMessageComponent.length).toBe(1);
});
