import { firestore as db, firebase } from './firebaseInit';

/* eslint-disable import/prefer-default-export */

const ERROR_OBJECT_NOT_EXIST = 'ERROR_OBJECT_NOT_EXIST';
export function ObjectNotExist(message) {
  this.name = ERROR_OBJECT_NOT_EXIST;
  this.message = message;
  this.stack = new Error().stack;
}
ObjectNotExist.prototype = Object.create(Error.prototype);
ObjectNotExist.prototype.name = 'ObjectNotExist';

const postRef = db.collection('posts');
const transformDoc = doc => ({ id: doc.id, ...doc.data() });

export const createPost = post => {
  const p = {
    ...post,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  };
  postRef.add(p);
};

export const getPostList = ({
  limit = 20,
  orderBy = 'title',
  startAfter = null,
  endBefore = null,
} = {}) => {
  let query = postRef.orderBy(orderBy).limit(limit);
  query = startAfter ? query.startAfter(startAfter) : query;
  query = endBefore ? query.endBefore(endBefore) : query;
  query = query.get().then(querySnapshot => {
    const posts = querySnapshot.docs.map(transformDoc);
    const firstVisible = querySnapshot.empty ? null : querySnapshot.docs[0];
    const lastVisible = querySnapshot.empty
      ? null
      : querySnapshot.docs[querySnapshot.docs.length - 1];
    return { data: posts, meta: { lastVisible, firstVisible } };
  });
  return query;
};

export const getPost = id =>
  postRef
    .doc(id)
    .get()
    .then(doc => {
      if (!doc.exists) {
        throw new ObjectNotExist(`Post with id (${id}) is not exist`);
      }

      return transformDoc(doc);
    });

export default {
  getPost,
};
