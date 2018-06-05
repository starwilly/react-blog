import { POST_LIST_LOAD } from './../actions';

export default function postListReducer(state = [], { type, payload: posts }) {
  switch (type) {
    case POST_LIST_LOAD:
      return [...posts];
    default:
      return state;
  }
}
