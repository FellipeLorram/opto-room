import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: '',
  user: {
    name: '',
  },
  isLoading: false,
  level: 0,
  currentUserName: '',
};

const Reducer = (state = initialState, action) => {
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