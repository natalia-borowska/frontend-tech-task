import React from 'react';
import { MemoryRouter} from 'react-router-dom';
import { mount, shallow, ShallowWrapper } from 'enzyme';

import AppWrapper from './AppWrapper';
import ArticleList from '../../components/ArticleList';
import PageNotFound from '../../components/PageNotFound';
import { findByTestAttribute } from '../../utils/testUtils';

describe('renders AppWrapper component', () => {
  let wrapper: ShallowWrapper<typeof AppWrapper>;

  beforeEach(() => {
    wrapper = shallow(<AppWrapper />);
  });

  it('renders without error', () => {
    const appWrapperComponent = findByTestAttribute(wrapper, 'appWrapperComponent');

    expect(appWrapperComponent.length).toBe(1);
  });
  
  it('renders appFooter', () => {
    const appFooter = findByTestAttribute(wrapper, 'appFooter');

    expect(appFooter.length).toBe(1);
  });
});

describe('routes defined in AppWrapper lead to proper components', () => {
  it('on the initial app load AppWrapper is displayed', () => {
    const wrapper = mount(  
      <MemoryRouter initialEntries={['/']}>
        <AppWrapper />
      </MemoryRouter>
    );

    expect(wrapper.find(ArticleList)).toHaveLength(1);

    wrapper.unmount();
  });

  it('on route /kategorie AppWapper is rendered', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/kategorie']}>
        <AppWrapper />
      </MemoryRouter>
    );
  
    expect(wrapper.find(ArticleList)).toHaveLength(1);

    wrapper.unmount();
  });

  it('on route /not-existing-route PageNotFound is rendered', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <AppWrapper />
      </MemoryRouter>
    );

    expect(wrapper.find(PageNotFound)).toHaveLength(1);

    wrapper.unmount();
  });
});
