import React from 'react';
import { BaseView } from '@/core/views';

import PostListContainer from '../containers/PostListContainer';

const BlogIndexView = () => (
  <BaseView>
    <PostListContainer />
  </BaseView>
);

export default BlogIndexView;
