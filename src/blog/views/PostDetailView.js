import React from 'react';
import PropTypes from 'prop-types';

import { BaseView } from '@/core/views';

import PostDetailContainer from '../containers/PostDetailContainer';

function PostDetailView({ match }) {
  const postId = match.params.id;
  return (
    <BaseView>
      <PostDetailContainer postId={postId} />
    </BaseView>
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
