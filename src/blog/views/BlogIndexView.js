import React from 'react';

import SiteNav from '../components/SiteNav';
import PostListContainer from '../containers/PostListContainer';

function BlogIndexView() {
  return (
    <div>
      <SiteNav />
      <PostListContainer />
    </div>
  );
}

export default BlogIndexView;