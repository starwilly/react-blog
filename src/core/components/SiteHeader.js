import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';

import SiteNavContainer from '../containers/SiteNavContainer';

const { Header } = Layout;

const SiteHeader = () => (
  <Header>
    <Row>
      <Col span={6}>
        <div className="SiteLogo">
          <Link href to="/">
            My Blog
          </Link>
        </div>
      </Col>
      <Col span={18} className="SiteNav">
        <SiteNavContainer />
      </Col>
    </Row>
  </Header>
);

export default SiteHeader;
