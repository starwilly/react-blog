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
