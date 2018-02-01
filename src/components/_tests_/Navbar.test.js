import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });

  it('renders without unexpected changes', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
