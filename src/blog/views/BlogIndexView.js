import React from 'react';

import PostListContainer from '../containers/PostListContainer';

import BaseView from '../../common/views/BaseView';

function BlogIndexView() {
  return (
    <BaseView>
      <PostListContainer />
    </BaseView>
  );
}

export default BlogIndexView;
