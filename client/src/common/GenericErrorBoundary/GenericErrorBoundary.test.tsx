import React from 'react';
import { shallow } from 'enzyme';

import GenericErrorBoundary from './GenericErrorBoundary';
import { findByTestAttribute } from '../../utils/testUtils';

it('renders GenericErrorBoundary when error is triggered in the wrapped component', () => {
  const ComponentTriggeringError = () => null;
  const wrapper = shallow(
    <GenericErrorBoundary>
      <ComponentTriggeringError />
    </GenericErrorBoundary>
  );

  const error = new Error('test error');

  wrapper.find(ComponentTriggeringError).simulateError(error);
  const genericErrorBoundaryComponent = findByTestAttribute(wrapper, 'genericErrorBoundaryComponent');

  expect(genericErrorBoundaryComponent.length).toBe(1);
});
