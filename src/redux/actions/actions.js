import axios from 'axios';
import { browserHistory } from 'react-router';

import { API_URL } from './index';
import {
  CREATE_QUOTE_REQUEST,
  CREATE_QUOTE_SUCCESS,
  CREATE_QUOTE_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './types';

function createQuoteRequest() {
  return { type: CREATE_QUOTE_REQUEST };
}

export function createQuote(zipcode) {
  createQuoteRequest();
  return (dispatch) => {
    axios.post(`${API_URL}/zipcode/`, { zipcode })
      .then((response) => {
        browserHistory.push('/user-info');
        dispatch({ type: CREATE_QUOTE_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: CREATE_QUOTE_FAILURE, payload: error.response });
      })
  }
}

function fetchUserRequest() {
  return { type: FETCH_USER_REQUEST };
}

export function fetchUser(quoteId) {
  fetchUserRequest();
  return (dispatch) => {
    axios.get(`${API_URL}/user/${quoteId}`)
      .then((response) => {
        dispatch({ type: FETCH_USER_SUCCESS, payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: FETCH_USER_FAILURE, payload: error.data })
      })
  }
}