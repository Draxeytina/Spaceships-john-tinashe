import store from '../configureStore';
import { fetchRockets, reserveRocket, cancelRocket } from './rockets';

describe('Test Rockets Reducers', () => {
  test('Fetch Rockets', async () => {
    await store.dispatch(fetchRockets());
    expect(store.getState().rockets).toBeTruthy();
  });

  test('Reserve Rocket', async () => {
    await store.dispatch(fetchRockets());
    store.dispatch(reserveRocket(1));
    const { rockets } = store.getState();
    const rocket = rockets.find((rocket) => rocket.id === 1);
    expect(rocket).toBeTruthy();
    expect(rocket.reserved).toBe(true);
  });

  test('Cancel Rocket', async () => {
    await store.dispatch(fetchRockets());
    store.dispatch(reserveRocket(1));
    const { rockets } = store.getState();
    const rocket = rockets.find((rocket) => rocket.id === 1);
    expect(rocket).toBeTruthy();
    expect(rocket.reserved).toBe(true);

    store.dispatch(cancelRocket(1));
    const upRockets = store.getState().rockets;
    const upRocket = upRockets.find((rocket) => rocket.id === 1);
    expect(upRockets).toBeTruthy();
    expect(upRocket.reserved).toBe(false);
  });
});
