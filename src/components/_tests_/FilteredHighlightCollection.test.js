import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import FilteredHighlightCollection from '../FilteredHighlightCollection';

describe('Highlights Component', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});

  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <FilteredHighlightCollection />
      </Provider>
    );
  });

});
