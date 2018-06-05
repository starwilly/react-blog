import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PostList from '../../components/PostList';
import { fetchPostList, clearPostList } from '../../actions';
import { PostPropType } from '../../components/Post/Post';

class PostListContainer extends Component {
  componentDidMount() {
    this.props.fetchPostList();
  }

  componentWillUnmount() {
    this.props.clearPostList();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h2>Post List</h2>
        {posts.length > 0 ? (
          <PostList posts={this.props.posts} />
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

PostListContainer.propTypes = {
  posts: PropTypes.arrayOf(PostPropType).isRequired,
  fetchPostList: PropTypes.func.isRequired,
  clearPostList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.blog.postList,
});

const mapDispatchToProps = {
  fetchPostList,
  clearPostList,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
