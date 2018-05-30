import { firestore as db } from './firebaseInit';

/* eslint-disable import/prefer-default-export */
const postRef = db.collection('posts');

export const createPost = post => postRef.add(post);
