import axios from 'axios';
import React, {useState, useEffect} from 'react';

import { Category } from '../../types';
import Articles from './components/Articles';
import CategoriesHeader from './components/CategoriesHeader';
import ErrorMessage from '../../common/ErrorMessage';
import LoadingMessage from '../../common/LoadingMessage';
import Sidebar from './components/Sidebar';

import './ArticleList.css';

const ArticleList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [fetchingError, setFetchingError] = useState(false);

  useEffect(() => {
    axios.post('/graphql', {
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
      }`
    }).then(response => {
      setCategories(response.data.data.categories);
    }).catch(error => {
      setFetchingError(true);
    });
  }, []);

  return (
    <div className={'page'}>
      <header className={'header'}>
        <strong>home24</strong>
        <input placeholder={'Search'} />
      </header>

      <Sidebar categories={categories} />

      <div className={'content'}>
        {categories.length ?
          <CategoriesHeader categoryName={categories[0].name} articleCount={categories[0].articleCount} />
        : 
          fetchingError ?
            <ErrorMessage message='Sorry, there was a problem with loading your request, please try again.' />
            :
            <LoadingMessage />
        }
        <Articles categories={categories} />
      </div>

      <footer className={'footer'}>
        Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
      </footer>
    </div>
  );
}

export default ArticleList;
