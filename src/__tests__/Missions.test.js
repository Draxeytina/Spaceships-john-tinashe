import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Missions from '../components/Missions';
import store from '../reduks/configureStore';

describe('Testing component rendering propperly', () => {
  test('renders MissionsList component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Missions />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
