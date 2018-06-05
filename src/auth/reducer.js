import * as types from './actionTypes';

const initialState = {
  user: null,
  isLogin: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_SIGN_IN:
      return { ...state, user: action.payload };
    case types.USER_SIGN_OUT:
      return { ...state, user: null };
    default:
  }
  return state;
}
