import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// import SiteHeader from '../components/SiteHeader';
import SiteHeaderContiner from '../containers/SiteHeaderContainer';

const { Content } = Layout;

const BaseView = ({ children }) => (
  <Layout>
    <SiteHeaderContiner isBrowsingAdmin={false} />
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
export default withRouter(BaseView);
