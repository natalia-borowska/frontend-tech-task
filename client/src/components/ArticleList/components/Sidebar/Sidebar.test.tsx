import React from 'react';
import { createMemoryHistory } from 'history';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import { Router } from 'react-router-dom';

import Sidebar from './Sidebar';
import { findByTestAttribute } from '../../../../utils/testUtils';

describe('renders Sidebar', () => {
  let wrapper: ShallowWrapper<typeof Sidebar>;

  beforeEach(() => {
    const props = {
      categories: [
        {
          name: 'category1',
          urlPath: 'category1Url',
        },
        {
          name: 'category2',
          urlPath: 'category2Url',
        },
      ]
    }
    wrapper = shallow(<Sidebar {...props} />);
  });

  it('renders without error', () => {
    const sidebarComponent = findByTestAttribute(wrapper, 'sidebarComponent');

    expect(sidebarComponent.length).toBe(1);
  });

  it('renders 2 <li>', () => {
    const categoryListItem = findByTestAttribute(wrapper, 'categoryListItem');

    expect(categoryListItem.length).toBe(2);
  });
});

it('clicking on one of the categories will redirect to a category route defined in Sidebar props', () => {
  const history = createMemoryHistory();
  history.push = jest.fn();

  const props = {
    categories: [
      {
        name: 'category1',
        urlPath: 'category1Url',
      },
    ]
  }

  const wrapper = mount(
    <Router history={history}>
      <Sidebar {...props} />
    </Router>
  );
  
  const categoryLink = findByTestAttribute(wrapper, 'categoryLink').at(0);
  categoryLink.simulate('click', { button: 0 });

  expect(history.push).toHaveBeenCalledWith('/category1Url');

  wrapper.unmount();
});
