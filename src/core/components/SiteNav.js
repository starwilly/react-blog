import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Menu, Avatar, Icon } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import auth from '@/auth';

const { userPropType } = auth.models;
const { SubMenu } = Menu;

const StyledAvatar = styled(Avatar)`
  > .anticon {
    margin-right: 0;
  }
`;

const UserAvatar = user =>
  user.isSignIn && user.photoURL ? (
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

class SiteNav extends PureComponent {
  render() {
    const { user, isFirebaseAuthSynced } = this.props;
    if (!isFirebaseAuthSynced) {
      return <div className="SiteNav" />;
    }
    return (
      <div className="SiteNav">
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
          {user.isSignIn ? (
            <SubMenu title={UserAvatar(user)} onTitleClick={this.props.signIn}>
              <Menu.Item key="admin">
                <Link href to="/admin/">
                  <Icon type="appstore" /> Dashboard
                </Link>
              </Menu.Item>
              <Menu.Item key="sign-out" onClick={this.props.signOut}>
                <Icon type="logout" /> Sign Out
              </Menu.Item>
            </SubMenu>
          ) : (
            <Menu.Item
              key="sign-in"
              selectable={false}
              onClick={this.props.signIn}
            >
              <StyledAvatar icon="user" /> Sign In
            </Menu.Item>
          )}
        </Menu>
      </div>
    );
  }
}

SiteNav.propTypes = {
  signOut: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  user: userPropType.isRequired,
  isFirebaseAuthSynced: PropTypes.bool.isRequired,
};

// SiteNav.defaultProps = {
//   user: null,
// };

export default SiteNav;
