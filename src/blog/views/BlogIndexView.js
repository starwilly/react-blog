import React from 'react';

import { BaseView } from '@/core/views';
import PostListContainer from '../containers/PostListContainer';

function BlogIndexView() {
  return (
    <BaseView>
      <PostListContainer />
    </BaseView>
  );
}

export default BlogIndexView;
