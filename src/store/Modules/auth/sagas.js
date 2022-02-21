import {
  call,
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
    const { email, password } = payload;
    const response = yield call(axios.post, '/token', { email, password });
    yield put(actions.loginSucess({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

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
