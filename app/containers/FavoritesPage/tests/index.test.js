import React from 'react';
import { shallow } from 'enzyme';

import FavoritesPage from '../index';

describe('<FeaturePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<FavoritesPage />);
    expect(renderedComponent.contains(<h1>Features</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<FavoritesPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
