import configureStore from 'redux-mock-store';
import { requestLaunches, fetchLaunches } from '../Launches';

const mockStore = configureStore();
const store = mockStore();

describe('Launches', () => {
    beforeEach(() => {
        store.clearActions();
    });
    test('Request Launches', () => {
        const expectedActions = [{ "type": "REQUEST_LAUNCHES" }];
        store.dispatch(requestLaunches());
        expect(store.getActions()).toEqual(expectedActions);
    });
});
