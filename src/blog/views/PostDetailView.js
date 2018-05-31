import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PostDetailContainer from '../containers/PostDetailContainer';

function PostDetailView(props) {
  return (
    <Fragment>
      <Link href to="/">
        Back
      </Link>
      <hr />
      <PostDetailContainer postId={props.match.params.id} />
    </Fragment>
  );
}

PostDetailView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PostDetailView;
