import React from 'react';
import PropTypes from 'prop-types';

import { BaseView } from '@/core/views';

import PostDetailContainer from '../containers/PostDetailContainer';

function PostDetailView(props) {
  return (
    <BaseView>
      <PostDetailContainer postId={props.match.params.id} />
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
