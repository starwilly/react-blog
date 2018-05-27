import { FETCH_POST, CLEAR_CURRENT_POST } from './../post/actions';

const currentPostReducer = (state = null, { type, value }) => {
  switch (type) {
    case FETCH_POST:
      return value;
    case CLEAR_CURRENT_POST:
      return null;
    default:
      return state;
  }
};

export default currentPostReducer;
