import { FETCH_POSTS } from './../post/actions';

export default function posts(state = [], { type, payload }) {
  switch (type) {
    case FETCH_POSTS:
      return payload;
    default:
      return state;
  }
}
