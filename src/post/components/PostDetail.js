import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchPost, clearCurrentPostAction } from './../actions';

class PostDetail extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  componentWillUnmount() {
    this.props.clearCurrentPost();
  }

  render() {
    if (this.props.post) {
      return <div>Post detail: {this.props.post.text}</div>;
    }
    return <div>Loading...</div>;
  }
}

PostDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  fetchPost: PropTypes.func.isRequired,
  clearCurrentPost: PropTypes.func.isRequired,
};

PostDetail.defaultProps = {
  post: {
    title: '',
    text: '',
  },
};

const mapStateToProps = state => ({
  post: state.currentPost,
});

const mapDispatchToProps = {
  fetchPost,
  clearCurrentPost: clearCurrentPostAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
