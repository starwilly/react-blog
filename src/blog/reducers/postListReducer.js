import { UPDATE_POST_LIST } from './../actions';

export default function postListReducer(state = [], { type, postList }) {
  switch (type) {
    case UPDATE_POST_LIST:
      return postList;
    default:
      return state;
  }
}
