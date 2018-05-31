import { UPDATE_CURRENT_POST, CLEAR_CURRENT_POST } from './../actions';

const currentPostReducer = (state = null, { type, post }) => {
  switch (type) {
    case UPDATE_CURRENT_POST:
      return post;
    case CLEAR_CURRENT_POST:
      return null;
    default:
      return state;
  }
};

export default currentPostReducer;
