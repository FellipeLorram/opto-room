import * as types from '../types';
import IAction from './Interfaces/IActions';
import IPayload from './Interfaces/IPayload';

export function loginRequest(payload: IPayload): IAction {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSucess(payload: IPayload): IAction {
  return {
    type: types.LOGIN_SUCESS,
    payload,
  };
}

export function loginFailure(payload: IPayload): IAction {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

