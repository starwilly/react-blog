import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppRoute from './routes';
import { auth as fireAuth } from './firebaseInit';
import { signInUser, signOutUser } from './auth/actions';

class App extends Component {
  componentDidMount() {
    // observe firebase's auth state
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.props.signInUser(user);
      } else {
        this.props.signOutUser();
      }
    });
  }
  render() {
    return <AppRoute />;
  }
}

App.propTypes = {
  signInUser: PropTypes.func.isRequired,
  signOutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signInUser,
  signOutUser,
};

export default connect(null, mapDispatchToProps)(App);
