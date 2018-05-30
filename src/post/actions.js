import { firestore as db } from './../firebaseInit';

export const FETCH_POSTS = 'FETCH_POSTS';

const receivePosts = posts => ({
  type: FETCH_POSTS,
  payload: posts,
});

export default function fetchPosts() {
  return dispatch => {
    const posts = [];
    db
      .collection('posts')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const post = doc.data();
          post.id = doc.id;
          posts.push(post);
        });
        dispatch(receivePosts(posts));
      });
  };
}

export const FETCH_POST = 'FETCH_POST';
const receivePost = post => ({
  type: FETCH_POST,
  value: post,
});

export function fetchPost(id) {
  return dispatch => {
    db
      .collection('posts')
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          dispatch(receivePost({ id, ...doc.data() }));
        } else {
          console.log('not exist...');
        }
      });
  };
}

export const CLEAR_CURRENT_POST = 'CLEAR_CURRENT_POST';
export const clearCurrentPostAction = () => ({
  type: CLEAR_CURRENT_POST,
});

export const CREATE_POST = 'CREATE_POST';
export const createPostAction = post => ({
  type: CREATE_POST,
  payload: post,
});
