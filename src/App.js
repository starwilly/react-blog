import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import auth from '@/auth';
import AppRoute from './routes';
import { auth as fireAuth } from './firebaseInit';

const { syncFirebaseAuth, signInUser, signOutUser } = auth.actions;

class App extends Component {
  componentDidMount() {
    // observe firebase's auth state
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.props.signInUser(user);
      } else {
        this.props.signOutUser();
      }
      this.props.syncFirebaseAuth(true);
    });
  }
  render() {
    return <AppRoute />;
  }
}

App.propTypes = {
  signInUser: PropTypes.func.isRequired,
  signOutUser: PropTypes.func.isRequired,
  syncFirebaseAuth: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signInUser,
  signOutUser,
  syncFirebaseAuth,
};

export default connect(null, mapDispatchToProps)(App);
