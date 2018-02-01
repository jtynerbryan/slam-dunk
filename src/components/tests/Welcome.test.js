import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Welcome from '../Welcome';

describe('Welcome Component', () => {
  it('renders without crashing', () => {
    shallow(<Welcome />);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
