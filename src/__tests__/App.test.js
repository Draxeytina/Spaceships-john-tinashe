import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../reduks/configureStore';
import Missions from '../components/Missions';

const renderMissions = (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Missions', () => {
  test('renders missions page', () => {
    render(renderMissions);
    const header = screen.getByText('Status');
    expect(header).toBeInTheDocument();
  });
});
