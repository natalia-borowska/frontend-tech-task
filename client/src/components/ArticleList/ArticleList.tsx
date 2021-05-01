import React from 'react';

import { Category } from '../../types';
import Articles from './components/Articles';
import CategoriesHeader from './components/CategoriesHeader';
import Sidebar from './components/Sidebar';

import './ArticleList.css';

type State = {
  categories: Category[];
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/graphql');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
      query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
    }));

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);

        this.setState({ categories: response.data.categories });
      }
    }
  }

  render() {
    return (
      <div className={'page'}>
        <div className={'header'}>
          <strong>home24</strong>
          <input placeholder={'Search'} />
        </div>

        <Sidebar categories={this.state.categories} />

        <div className={'content'}>
          {this.state.categories.length ?
            <CategoriesHeader categoryName={this.state.categories[0].name} articleCount={this.state.categories[0].articleCount} />
          : (
            'Loading...'
          )}
          <Articles categories={this.state.categories} />
        </div>

        <div className={'footer'}>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
        </div>
      </div>
    );
  }
}

export default ArticleList;
