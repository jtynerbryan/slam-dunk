import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Search } from '../Search';

describe('Search Comonent', () => {
  it('renders without crashing', () => {
    shallow(<Search />);
  });

  it('doesn\'t change unexpectedly', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
