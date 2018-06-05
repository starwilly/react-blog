import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import auth from '@/auth';
import SiteNav from '../components/SiteNav';

const {
  models: { userPropType },
  actions: { startSignInUser, startSignOutUser },
} = auth;

class SiteNavContinaer extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  signIn() {
    this.props.signIn().catch(e => {
      console.log(e);
    });
  }

  render() {
    return (
      <SiteNav
        user={this.props.user}
        signIn={this.signIn}
        signOut={this.signOut}
        isFirebaseAuthSynced={this.props.isFirebaseAuthSynced}
      />
    );
  }
}

SiteNavContinaer.propTypes = {
  signOut: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  user: userPropType,
  isFirebaseAuthSynced: PropTypes.bool.isRequired,
};

SiteNavContinaer.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavContinaer);
