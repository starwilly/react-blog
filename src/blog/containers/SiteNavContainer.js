import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SiteNav from '../components/SiteNav';
import { startSignOutUser, startSignInUser } from '../../auth/actions';

class SiteNavContinaer extends Component {
  constructor(props) {
    super(props);
    this.onSignOut = this.onSignOut.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignOut() {
    this.props.startSignOutUser().then(() => {
      console.log('sign out success');
    });
  }

  onSignIn() {
    this.props.startSignInUser().then(() => {
      console.log('sign in success');
    });
  }

  render() {
    return <SiteNav onSignOut={this.onSignOut} onSignIn={this.onSignIn} />;
  }
}

SiteNavContinaer.propTypes = {
  startSignInUser: PropTypes.func.isRequired,
  startSignOutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  startSignOutUser,
  startSignInUser,
};

export default connect(null, mapDispatchToProps)(SiteNavContinaer);
