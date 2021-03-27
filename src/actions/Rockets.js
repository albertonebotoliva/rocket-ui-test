import RocketService from '../services/RocketService';
import { REQUEST_ROCKET, RECEIVE_ROCKET, RESET_ROCKET } from '../constants/Rockets';

export const requestRocket = () => ({
  type: REQUEST_ROCKET
});

const receiveRocket = (data, response) => ({
  type: RECEIVE_ROCKET,
  flight_number: data.flight_number,
  data: response.data
});
const resetRocket = () => ({
  type: RESET_ROCKET,
  flight_number: null
});

const fetch = (data, dispatch) => {
  dispatch(requestRocket());
  return RocketService
    .get(data.rocket.rocket_id)
    .then(response => dispatch(receiveRocket(data, response)))
    .catch(err => console.error(err));
};

const reset = dispatch => dispatch(resetRocket())

const shouldFetch = (data, selected) => data.flight_number !== selected

export const fetchRocket = ({ dispatch, data, selected }) => {
  shouldFetch(data, selected)
    ? fetch(data, dispatch)
    : reset(dispatch);
}