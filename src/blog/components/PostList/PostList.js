import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Post from './../Post';

const renderPost = post => <Post post={post} key={post.id} />;

class PostList extends PureComponent {
  render() {
    const { posts } = this.props;
    return <div>{posts.map(renderPost)}</div>;
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
