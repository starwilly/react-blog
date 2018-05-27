import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = props => {
  const { post } = props;
  return (
    <article>
      <h1>
        <Link to={`/posts/${post.id}`} href>
          {post.title}
        </Link>
      </h1>
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
