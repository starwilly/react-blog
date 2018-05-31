import * as api from './../api';

export const CLEAR_POST_LIST = 'CLEAR_POST_LIST';
export function clearPostList() {
  return {
    type: CLEAR_POST_LIST,
  };
}

export const UPDATE_POST_LIST = 'UPDATE_POST_LIST';
export function updatePostList(postList) {
  return {
    type: UPDATE_POST_LIST,
    postList,
  };
}

export function fetchPostList() {
  return dispatch => {
    api.getPostList().then(posts => {
      dispatch(updatePostList(posts));
    });
  };
}

export const UPDATE_CURRENT_POST = 'UPDATE_CURRENT_POST';
export function updateCurrentPost(post) {
  return {
    type: UPDATE_CURRENT_POST,
    post,
  };
}

export function fetchCurrentPost(id) {
  return dispatch =>
    api.getPost(id).then(post => dispatch(updateCurrentPost(post)));
}

export const CLEAR_CURRENT_POST = 'CLEAR_CURRENT_POST';
export const clearCurrentPost = () => ({
  type: CLEAR_CURRENT_POST,
});

export const CREATE_POST = 'CREATE_POST';
export function createPost(post) {
  return {
    type: CREATE_POST,
    post,
  };
}
