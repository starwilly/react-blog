import React from 'react';
import { Breadcrumb, Row, Col, Button } from 'antd';

import AdminBaseView from './AdminBaseView';
import PostTable from '../components/PostTable';

const PostListView = () => (
  <AdminBaseView>
    <Row>
      <Col span={24} className="AdminPageHeader">
        <Breadcrumb>
          <Breadcrumb.Item>Post Management</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row justify="end" type="flex">
      <Button type="primary" icon="edit">
        New Post
      </Button>
    </Row>
    <Row style={{ marginTop: '8px' }}>
      <PostTable />
    </Row>
  </AdminBaseView>
);

export default PostListView;
