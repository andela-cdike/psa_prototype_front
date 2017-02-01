import {
  CREATE_QUOTE_REQUEST,
  CREATE_QUOTE_SUCCESS,
  CREATE_QUOTE_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  quote: {
    id: null,
    zipcode: null,
  },
  user: {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
  },
  fetching: false,
  error: null,
}

export function quotes(state=INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_QUOTE_REQUEST:
      return { ...state, fetching: true };
    case CREATE_QUOTE_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case CREATE_QUOTE_SUCCESS:
      return { ...state, fetching: false, quote: action.payload };
    case FETCH_USER_REQUEST:
      return { ...state, fetching: true };
    case FETCH_USER_FAILURE:
      return { ...state, fetching: false, error: action.payload };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        fetching: false,
        quote: action.payload.quote,
        user: action.payload.user,
      };
    // no default
  }
  return state;
}