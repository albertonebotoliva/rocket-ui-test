import { REQUEST_LAUNCHES, RECEIVE_LAUNCHES } from '../constants/Launches';

const initialState = {
  data: [],
  fetching: false
};

const actionHandlers = {
  [REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    data: [...state.data, ...action.data]
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
