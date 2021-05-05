import React from 'react';
import { createMemoryHistory } from 'history';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import { Router } from 'react-router-dom';

import Sidebar from './Sidebar';
import { findByTestAttribute } from '../../../../utils/testUtils';

const props = {
  categories: [
    {
      name: 'testCategory1',
      categoryArticles: {
        articles: [
          {
            name: 'categoryArticle1',
            variantName: 'categoryArticle1Variant',
            prices: {
              currency: 'EUR',
              regular: {
                value: 100,
              },
            },
            images: [
              {
                path: 'testPath',
              },
            ],
          },
        ],
      },
      articleCount: 1,
      childrenCategories: [
        {
          name: "testChildCategory1",
          urlPath: "kategorie/testChildCategory1/",
        },
        {
          name: "testChildCategory2",
          urlPath: "kategorie/testChildCategory2/",
        }
      ]
    }
  ]
};

describe('renders Sidebar', () => {
  let wrapper: ShallowWrapper<typeof Sidebar>;

  beforeEach(() => {
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

  const wrapper = mount(
    <Router history={history}>
      <Sidebar {...props} />
    </Router>
  );
  
  const categoryLink = findByTestAttribute(wrapper, 'categoryLink').at(0);
  categoryLink.simulate('click', { button: 0 });

  expect(history.push).toHaveBeenCalledWith('/kategorie/testChildCategory1/');

  wrapper.unmount();
});
