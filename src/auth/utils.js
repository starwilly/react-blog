import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRouteInner = ({
  component: Component,
  isAuthenticated,
  isAuthSynced,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated) {
        return <Component {...props} />;
      }
      if (isAuthSynced) {
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }
      return null;
    }}
  />
);

const mapStateToProps = state => ({
  isAuthSynced: state.auth.isFirebaseAuthSynced,
  isAuthenticated: state.auth.user.isSignIn,
});

/* eslint-disable react/forbid-prop-types */
PrivateRouteInner.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  isAuthSynced: PropTypes.bool,
};
PrivateRouteInner.defaultProps = {
  component: null,
  isAuthSynced: null,
  isAuthenticated: null,
};

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteInner);

export default { PrivateRoute };
