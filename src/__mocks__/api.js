/* eslint-disable import/prefer-default-export */
const postList = [{ id: 'id1', text: 'text1' }, { id: 'id2', text: 'text2' }];

export function getPostList() {
  return Promise.resolve(postList);
}
