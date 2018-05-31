import { combineReducers } from 'redux';

import postList from './postListReducer';
import currentPost from './currentPostReducer';

export default combineReducers({
  postList,
  currentPost,
});
