import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import CategoriesHeader from './CategoriesHeader';
import { findByTestAttribute } from '../../../../utils/testUtils';

describe('renders CategoriesHeader', () => {
  let wrapper: ShallowWrapper<typeof CategoriesHeader>;

  beforeEach(() => {
    const props = {
      articleCount: 100,
      categoryName: 'testCategory',
    };

    wrapper = shallow(<CategoriesHeader {...props} />);
    
  });

  it('renders without error', () => {
    const categoriesHeaderComponent = findByTestAttribute(wrapper, 'categoriesHeaderComponent');

    expect(categoriesHeaderComponent.length).toBe(1);
  });

  it('renders category name', () => {
    const categoriesHeader = findByTestAttribute(wrapper, 'categoriesHeader');

    expect(categoriesHeader.text()).toEqual('testCategory(100)');
  });
});
