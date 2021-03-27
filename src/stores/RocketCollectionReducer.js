import { REQUEST_ROCKET, RECEIVE_ROCKET, RESET_ROCKET } from '../constants/Rockets';

const initialState = {
  data: {},
  flight_number: null,
  fetching: false
};

const actionHandlers = {
  [REQUEST_ROCKET]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [RECEIVE_ROCKET]: ({ state, action }) => ({
    ...state,
    fetching: false,
    flight_number: action.flight_number,
    data: { ...action.data }
  }),
  [RESET_ROCKET]: ({ state }) => ({
    ...state,
    fetching: false,
    flight_number: null,
    data: {}
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
