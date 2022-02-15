import * as types from '../types';
import IAction from './Interfaces/IActions';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {},
  isLoading: false,
  level: 0,
  currentUserName: '',
};

const Reducer = (state = initialState, action: IAction): typeof initialState => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }

    case types.LOGIN_SUCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      return { ...initialState };
    }
    default: return state;
  }
}

export default Reducer;