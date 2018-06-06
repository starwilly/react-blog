import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PostPropType } from '../components/Post';
import { fetchCurrentPost, clearCurrentPost } from './../actions';
import { ObjectNotExist } from './../../api';

class PostDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postNotFound: false,
    };
  }

  componentDidMount() {
    this.props.fetchCurrentPost(this.props.postId).catch(e => {
      this.setState({ postNotFound: e instanceof ObjectNotExist });
    });
  }

  componentWillUnmount() {
    this.props.clearCurrentPost();
  }

  render() {
    const { post } = this.props;
    if (this.state.postNotFound) {
      return <div>Post not Found</div>;
    }

    if (post) {
      return (
        <div>
          <h1>{post.title}</h1>
          <div>{post.text}</div>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

PostDetailContainer.propTypes = {
  postId: PropTypes.string.isRequired,
  post: PostPropType,
  fetchCurrentPost: PropTypes.func.isRequired,
  clearCurrentPost: PropTypes.func.isRequired,
};

PostDetailContainer.defaultProps = {
  post: {
    title: '',
    text: '',
  },
};

const mapStateToProps = state => ({
  post: state.blog.currentPost,
});

const mapDispatchToProps = {
  fetchCurrentPost,
  clearCurrentPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  PostDetailContainer
);
