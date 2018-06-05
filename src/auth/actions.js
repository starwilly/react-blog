import { firebase, auth as fireAuth } from '../firebaseInit';
import * as types from './actionTypes';

export function signInUser(user) {
  return {
    type: types.USER_SIGN_IN,
    user,
  };
}

export function syncFirebaseAuth(success) {
  return {
    type: types.FEIREBASE_AUTH_SYNC,
    success,
  };
}

export function signOutUser() {
  return {
    type: types.USER_SIGN_OUT,
  };
}

export function startSignOutUser() {
  return dispatch => fireAuth.signOut().then(dispatch(signOutUser()));
}

export function startSignInUser() {
  return dispatch => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return fireAuth.signInWithPopup(provider).then(result => {
      dispatch(signInUser(result.user));
    });
  };
}
