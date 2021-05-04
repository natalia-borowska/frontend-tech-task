import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ErrorMessage from './ErrorMessage';
import {findByTestAttribute} from '../../utils/testUtils';

describe('renders ErrorMessage', () => {
  let wrapper: ShallowWrapper<typeof ErrorMessage>;
  const message = 'example error message';

  beforeEach(() => {
    const props = {
      message,
    }
    wrapper = shallow(<ErrorMessage {...props} />);
  });

  it('renders without error', () => {
    const errorMessageComponent = findByTestAttribute(wrapper, 'errorMessageComponent');
  
    expect(errorMessageComponent.length).toBe(1);
  });

  it('renders a message', () => {
    const componentMessage = findByTestAttribute(wrapper, 'componentMessage');
    
    expect(componentMessage.text()).toEqual(message);
  })
});
