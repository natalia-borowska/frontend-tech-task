import React from 'react';
import { act } from "react-dom/test-utils";
import { shallow, ShallowWrapper } from 'enzyme';

import ArticleList from './ArticleList';
import Articles from './components/Articles';
import LoadingMessage from '../../common/LoadingMessage';
import { findByTestAttribute } from '../../utils/testUtils';
import axios from 'axios';

describe('renders the ArticleList', () => {
  let wrapper: ShallowWrapper<typeof ArticleList>;

  beforeEach(() => {
    wrapper = shallow(<ArticleList />);
  });

  it('renders without error', () => {
    const articleListComponent = findByTestAttribute(wrapper, 'articleListComponent');

    expect(articleListComponent.length).toBe(1);
  });

  it('on initial load it shows LoadingMessage component but doesn\'t show Articles', () => {
    expect(wrapper.find(LoadingMessage)).toHaveLength(1);

    expect(wrapper.find(Articles)).toHaveLength(0);
  })
});

describe('test fetching articles', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });

  it('mocks api call', async () => {
    const mockResponse = {
      data: {
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
      }
    };

    const axiosSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(axiosSpy).toHaveBeenCalled();

  });
});
