import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Avatar, Icon } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { userPropType } from '../../auth/constant';

const { SubMenu } = Menu;

const StyledAvatar = styled(Avatar)`
  > .anticon {
    margin-right: 0;
  }
`;

class SiteNav extends Component {
  genUserAvatar() {
    const { user } = this.props;
    return user && user.photoURL ? (
      <span>
        <StyledAvatar
          src={user.photoURL}
          style={{ marginRight: 0 }}
          icon="user"
        />{' '}
        {user.displayName}
      </span>
    ) : (
      <span>
        <StyledAvatar icon="user" /> Sign In
      </span>
    );
  }
  render() {
    return (
      <div className="SiteNav">
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
          <SubMenu
            title={this.genUserAvatar()}
            onTitleClick={this.props.onSignIn}
          >
            <Menu.Item key="sign-in" onClick={this.props.onSignIn}>
              <Icon type="login" /> Sign In
            </Menu.Item>
            <Menu.Item key="sign-out" onClick={this.props.onSignOut}>
              <Icon type="logout" /> Sign Out
            </Menu.Item>
            <Menu.Item key="admin">
              <Link href to="/admin/">
                <Icon type="appstore" /> Dashboard
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

SiteNav.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
  user: userPropType,
};

SiteNav.defaultProps = {
  user: null,
};

export default SiteNav;
