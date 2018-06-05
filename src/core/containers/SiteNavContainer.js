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
    this.onSignOut = this.onSignOut.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignOut() {
    this.props.startSignOutUser();
  }

  onSignIn() {
    this.props.startSignInUser();
  }

  render() {
    return (
      <SiteNav
        onSignOut={this.onSignOut}
        onSignIn={this.onSignIn}
        user={this.props.user}
      />
    );
  }
}

SiteNavContinaer.propTypes = {
  startSignInUser: PropTypes.func.isRequired,
  startSignOutUser: PropTypes.func.isRequired,
  user: userPropType,
};

SiteNavContinaer.defaultProps = {
  user: null,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  startSignOutUser,
  startSignInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteNavContinaer);
