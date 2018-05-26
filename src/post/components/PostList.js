import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import fetchPosts from './../actions';
import Post from './Post';

const renderPost = post => <Post post={post} key={post.id} />;

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <h1>Post List</h1>
        <hr />
        {this.props.posts.map(renderPost)}
      </div>
    );
  }
}

PostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
