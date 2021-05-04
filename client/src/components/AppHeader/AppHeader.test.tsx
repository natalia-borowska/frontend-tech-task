import React from 'react';
import { createMemoryHistory } from 'history';
import { mount, shallow } from 'enzyme';
import { Router } from 'react-router-dom';

import AppHeader from './AppHeader';
import { findByTestAttribute } from '../../utils/testUtils';

describe('renders AppHeader', () => {
  const wrapper = shallow(<AppHeader />);

  it('renders without error', () => {
    const appHeaderComponent = findByTestAttribute(wrapper, 'appHeader');

    expect(appHeaderComponent.length).toBe(1);
  });
});

it('clicking on logo will redirect to "/" route, rendering AppWrapper component', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();

  const wrapper = mount(
    <Router history={history}>
      <AppHeader />
    </Router>
  );
  
  const logo = findByTestAttribute(wrapper, 'logo').at(0);
  logo.simulate('click', { button: 0 });

  expect(history.push).toHaveBeenCalledWith('/');

  wrapper.unmount();
});
