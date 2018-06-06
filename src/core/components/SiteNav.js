import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Avatar, Icon } from 'antd';
import styled from 'styled-components';

import auth from '@/auth';

const { SubMenu } = Menu;

const { userPropType } = auth.models;

const StyledAvatar = styled(Avatar)`
  > .anticon {
    margin-right: 0;
  }
`;

const UserAvatar = user =>
  user.photoURL ? (
    <span>
      <StyledAvatar
        src={user.photoURL}
        style={{ marginRight: 0 }}
        icon="user"
      />
    </span>
  ) : (
    <span>
      <StyledAvatar icon="user" />
    </span>
  );

const SiteNav = ({ user, signIn, signOut, isBrowsingAdmin }) => (
  <div className="SiteNav">
    <Menu
      theme="dark"
      mode="horizontal"
      selectable={false}
      style={{ lineHeight: '64px' }}
    >
      <SubMenu
        title={
          <span>
            {UserAvatar(user)} {user.isSignIn ? user.displayName : 'Sign In'}
          </span>
        }
        onTitleClick={signIn}
      >
        {user.isSignIn && !isBrowsingAdmin ? (
          <Menu.Item key="admin">
            <Link href to="/admin/">
              <Icon type="appstore" /> Dashboard
            </Link>
          </Menu.Item>
        ) : null}
        {user.isSignIn && isBrowsingAdmin ? (
          <Menu.Item key="blog">
            <Link href to="/">
              <Icon type="home" /> Blog
            </Link>
          </Menu.Item>
        ) : null}
        {user.isSignIn ? (
          <Menu.Item key="sign-out" onClick={signOut}>
            <Icon type="logout" /> Sign Out
          </Menu.Item>
        ) : null}
      </SubMenu>
    </Menu>
  </div>
);

SiteNav.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  user: userPropType.isRequired,
  isBrowsingAdmin: PropTypes.bool.isRequired,
};

export default SiteNav;
