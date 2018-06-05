import React from 'react';
import PropTypes from 'prop-types';

import PostDetailContainer from '../containers/PostDetailContainer';
import BaseView from '../../common/views/BaseView';

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
