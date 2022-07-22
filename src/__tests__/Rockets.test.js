import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Rockets from '../components/Rockets';
import store from '../reduks/configureStore';

describe('Testing component rednering propperly', () => {
  test('renders MissionsList component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
