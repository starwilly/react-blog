import { firebase, auth as fireAuth } from '../firebaseInit';

export const USER_SIGN_IN = 'USER_SIGN_IN';
export const USER_SIGN_OUT = 'USER_SIGN_OUT';

export function signInUser(user) {
  return {
    type: USER_SIGN_IN,
    payload: user,
  };
}

export function signOutUser() {
  return {
    type: USER_SIGN_OUT,
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
