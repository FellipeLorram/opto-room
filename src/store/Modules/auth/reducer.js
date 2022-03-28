import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: '',
  userName: '',
  isLoading: false,
  userRef: '',
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
      newState.userName = action.payload.userName;
      newState.currentUserName = action.payload.userName;
      newState.userRef = action.payload.id
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