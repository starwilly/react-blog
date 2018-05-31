import { firestore as db } from './firebaseInit';

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

export const createPost = post => postRef.add(post);
export const getPostList = () =>
  postRef.get().then(querySnapshot => querySnapshot.docs.map(transformDoc));

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
