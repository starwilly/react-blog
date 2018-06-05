import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import SiteHeader from '../components/SiteHeader';

const { Content } = Layout;

const BaseView = ({ children }) => (
  <Layout>
    <SiteHeader />
    <Content>
      <div style={{ background: '#fff', padding: 50, minHeight: 380 }}>
        {children}
      </div>
    </Content>
  </Layout>
);

BaseView.propTypes = {
  children: PropTypes.node,
};

BaseView.defaultProps = {
  children: null,
};

export default BaseView;
