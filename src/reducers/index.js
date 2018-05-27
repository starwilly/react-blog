import { combineReducers } from 'redux';

import posts from './postsReducer';
import currentPost from './currentPostReducer';

const rootReducer = combineReducers({
  posts,
  currentPost,
});

export default rootReducer;
