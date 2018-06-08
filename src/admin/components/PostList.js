import React, { Component } from 'react';
import { Table, Divider, Button, Row } from 'antd';

import { getPostList } from '@/api';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      firstVisible: null,
      lastVisible: null,
      loading: true,
      hasPrev: false,
      hasNext: true,
    };
    this.loadPrevPage = this.loadPrevPage.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
  }

  componentDidMount() {
    this.loadNextPage();
  }

  setPostsState(resp) {
    const posts = resp.data;
    const { firstVisible, lastVisible } = resp.meta;
    if (posts) {
      this.setState({
        posts,
        firstVisible,
        lastVisible,
      });
    }
  }

  loadPrevPage() {
    this.setState({ loading: true });
    getPostList({ endBefore: this.state.firstVisible }).then(resp => {
      if (resp.data.length === 0) {
        this.setState({ hasPrev: false, loading: false });
        return;
      }
      this.setPostsState(resp);
      this.setState({ loading: false, hasNext: true });
    });
  }

  loadNextPage() {
    this.setState({ loading: true });
    getPostList({ startAfter: this.state.lastVisible }).then(resp => {
      if (resp.data.length === 0) {
        this.setState({ hasNext: false, loading: false });
        return;
      }
      this.setPostsState(resp);
      this.setState({ loading: false, hasPrev: true });
    });
  }

  render() {
    const columns = [
      { title: 'Title', dataIndex: 'title', key: 'title', width: '30%' },
      { title: 'Content', dataIndex: 'text', key: 'text' },
      {
        title: 'Action',
        key: 'action',
        width: 200,
        render: () => (
          <div>
            <a href>Edit</a>
            <Divider type="vertical" />
            <a href>Delete</a>
          </div>
        ),
      },
    ];
    return (
      <div>
        <Table
          dataSource={this.state.posts}
          columns={columns}
          pagination={false}
          rowKey="id"
          loading={this.state.loading}
        />

        <Row className="AdminPagination" type="flex" justify="center">
          <Button onClick={this.loadPrevPage} disabled={!this.state.hasPrev}>
            Prev Page
          </Button>
          <Button onClick={this.loadNextPage} disabled={!this.state.hasNext}>
            Next Page
          </Button>
        </Row>
      </div>
    );
  }
}
