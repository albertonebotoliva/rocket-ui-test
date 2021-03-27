import LaunchService from '../services/LaunchService';
import { REQUEST_LAUNCHES, RECEIVE_LAUNCHES } from '../constants/Launches';

export const requestLaunches = () => ({
  type: REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: RECEIVE_LAUNCHES,
  data: response.data
});

const fetch = dispatch => {
  dispatch(requestLaunches());
  return LaunchService
    .get()
    .then(response => dispatch(receiveLaunches(response)))
    .catch(err => console.error(err));
};

const shouldFetch = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunches = ({ dispatch, launchCollection }) =>
  shouldFetch(launchCollection) && fetch(dispatch);
