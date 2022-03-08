import {
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import { get } from 'lodash';

import axios from '../../../Services/axios';
import history from '../../../Services/history';
import * as types from '../types';
import * as actions from './actions';

function* loginRequest({ payload }) {
  try {
    const { email, id, token, userName } = payload;
    yield put(actions.loginSucess({  email, id, token, userName }));

    axios.defaults.headers.Authorization = `Bearer ${token}`;

    history.push('/');
  } catch (error) {
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
