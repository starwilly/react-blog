import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  const { post } = props;
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.text}</div>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
};

export default Post;