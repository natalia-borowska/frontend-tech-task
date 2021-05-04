import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Articles from './Articles';
import ArticleCard from './ArticleCard';
import { findByTestAttribute } from '../../../../utils/testUtils';

describe('renders Articles', () => {
  let wrapper: ShallowWrapper<typeof Articles>;

  beforeEach(() => {
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
              name: "testChildCategory",
              urlPath: "kategorie/testChildCategory/",
            }
          ]
        }
      ]
    };
  
    wrapper = shallow(<Articles {...props} />);
  });

  it('renders without error', () => {
    const articlesComponent = findByTestAttribute(wrapper, 'articlesComponent');

    expect(articlesComponent.length).toBe(1);
  });

  it('renders 1 ArticleCard', () => {
    expect(wrapper.find(ArticleCard)).toHaveLength(1);
  });
});
