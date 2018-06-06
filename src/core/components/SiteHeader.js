import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { userPropType } from '@/auth/models';

import SiteNav from '../components/SiteNav';

const { Header } = Layout;

const SiteHeader = ({
  signIn,
  signOut,
  user,
  isBrowsingAdmin,
  isFirebaseAuthSynced,
}) => (
  <Header>
    <Row>
      <Col span={6}>
        <div className="SiteLogo">
          <Link href to={isBrowsingAdmin ? '/admin' : '/'}>
            My Blog
          </Link>
        </div>
      </Col>
      <Col span={18} className="SiteNav">
        {isFirebaseAuthSynced && (
          <SiteNav
            signIn={signIn}
            signOut={signOut}
            user={user}
            isBrowsingAdmin={isBrowsingAdmin}
          />
        )}
      </Col>
    </Row>
  </Header>
);

SiteHeader.propTypes = {
  user: userPropType.isRequired,
  isBrowsingAdmin: PropTypes.bool.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  isFirebaseAuthSynced: PropTypes.bool.isRequired,
};

export default SiteHeader;
