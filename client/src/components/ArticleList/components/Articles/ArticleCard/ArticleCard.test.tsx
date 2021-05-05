import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ArticleCard from './ArticleCard';
import { findByTestAttribute } from '../../../../../utils/testUtils';
import { formatter } from '../../../../../utils';

describe('renders ArticleCard', () => {
  let wrapper: ShallowWrapper<typeof ArticleCard>;
  const value = 100;
  const name = 'categoryArticle1';

  beforeEach(() => {
    const props = {
      article: {
        name,
        variantName: 'categoryArticle1Variant',
        prices: {
          currency: 'EUR',
          regular: {
            value,
          },
        },
        images: [
          {
            path: 'testPath',
          },
        ],
      }
    };

    wrapper = shallow(<ArticleCard {...props} />);
  });

  it('renders without error', () => {
    const articleCardComponent = findByTestAttribute(wrapper, 'articleCardComponent');

    expect(articleCardComponent.length).toBe(1);
  });

  it('contains product name in description', () => {
    const articleCardName = findByTestAttribute(wrapper, 'articleCardName');

    expect(articleCardName.text()).toMatch(name);
  });

  it('contains product price in description', () => {
    const articleCardPrice = findByTestAttribute(wrapper, 'articleCardPrice');
    const computedPrice = formatter.format(value / 100);

    expect(articleCardPrice.text()).toMatch(computedPrice);
  });
});
