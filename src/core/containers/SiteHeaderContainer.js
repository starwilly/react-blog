import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import auth from '@/auth';
import SiteHeader from '../components/SiteHeader';

const {
  models: { userPropType },
  actions: { startSignInUser, startSignOutUser },
} = auth;

class SiteHeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  signIn() {
    this.props.signIn();
  }

  render() {
    return (
      <SiteHeader {...this.props} signIn={this.signIn} signOut={this.signOut} />
    );
  }
}

SiteHeaderContainer.propTypes = {
  signOut: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  user: userPropType,
  isFirebaseAuthSynced: PropTypes.bool.isRequired,
  isBrowsingAdmin: PropTypes.bool.isRequired,
};

SiteHeaderContainer.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  isFirebaseAuthSynced: state.auth.isFirebaseAuthSynced,
});

const mapDispatchToProps = {
  signOut: startSignOutUser,
  signIn: startSignInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SiteHeaderContainer
);
