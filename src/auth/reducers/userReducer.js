import { USER_SIGN_IN, USER_SIGN_OUT } from '../actions';

export default function userReducer(state = null, action) {
  switch (action.type) {
    case USER_SIGN_IN:
      return action.payload;
    case USER_SIGN_OUT:
      return null;
    default:
  }
  return state;
}
