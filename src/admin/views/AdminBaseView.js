import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Icon } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { SiteHeaderContainer } from '@/core/containers';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class AdminBaseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  onCollapse(collapsed) {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SiteHeaderContainer isBrowsingAdmin />
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            theme="light"
          >
            <div className="logo" />
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Link to="/admin/posts/create" href>
                  <Icon type="pie-chart" />
                  Create Post
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: '0 16px' }}>{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

AdminBaseView.propTypes = {
  children: PropTypes.node,
  // match: PropTypes.shape({
  //   url: PropTypes.string,
  // }).isRequired,
};

AdminBaseView.defaultProps = {
  children: null,
};

export default withRouter(AdminBaseView);
