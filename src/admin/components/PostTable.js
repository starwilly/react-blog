import React from 'react';
import { connect } from 'react-redux';
import { Table, Divider, Button, Row } from 'antd';
import { compose, lifecycle } from 'recompose';
import PropTypes from 'prop-types';

import { PostPropType } from '@/blog/propTypes';
import { getPostList } from '@/api';

import withFirebasePagination from '@/core/hoc/withFirebasePagination';

const columns = [
  { title: 'Title', dataIndex: 'title', key: 'title', width: '30%' },
  { title: 'Content', dataIndex: 'text', key: 'text' },
  {
    title: 'Action',
    key: 'action',
    width: 200,
    render: () => (
      <div>
        <span>Edit</span>
        <Divider type="vertical" />
        <span href="#">Delete</span>
      </div>
    ),
  },
];

const PostTable = ({
  data,
  loading,
  hasPrev,
  hasNext,
  loadNextPage,
  loadPrevPage,
}) => {
  const posts = data;
  return (
    <div>
      <Table
        dataSource={posts}
        columns={columns}
        pagination={false}
        rowKey="id"
        loading={loading}
      />

      <Row className="AdminPagination" type="flex" justify="center">
        <Button onClick={loadPrevPage} disabled={!hasPrev}>
          Prev Page
        </Button>
        <Button onClick={loadNextPage} disabled={!hasNext}>
          Next Page
        </Button>
      </Row>
    </div>
  );
};

PostTable.propTypes = {
  data: PropTypes.arrayOf(PostPropType).isRequired,
  loading: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  hasPrev: PropTypes.bool.isRequired,
  loadNextPage: PropTypes.func.isRequired,
  loadPrevPage: PropTypes.func.isRequired,
};

export default compose(
  connect(),
  withFirebasePagination({ api: getPostList }),
  lifecycle({
    componentDidMount() {
      this.props.loadNextPage();
    },
  })
)(PostTable);
