import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../reduks/configureStore';
import Rockets from '../Rockets';

const renderRockets = () => {
  const { wrapper } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  return wrapper;
};

describe('Test Rockets component', () => {
  test('Match Snapshot', () => {
    expect(renderRockets().firstChild).toMatchSnapshot();
  });

  test('Find Elements', () => {
    expect(renderRockets().querySelector('.rockets')).toBeInTheDocument();
  });
});
