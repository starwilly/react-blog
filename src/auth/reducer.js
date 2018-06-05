import * as types from './actionTypes';

const initialState = {
  isFirebaseAuthSynced: false,
  user: {
    isSignIn: false,
    displayName: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_SIGN_IN:
      return { ...state, user: { ...action.user, isSignIn: true } };

    case types.USER_SIGN_OUT:
      return { ...state, user: initialState.user };

    case types.FEIREBASE_AUTH_SYNC:
      return { ...state, isFirebaseAuthSynced: action.success };

    default:
  }
  return state;
}
