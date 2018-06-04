import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SiteNav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link href to="/admin/">
              Admin
            </Link>
          </li>
          <li>{JSON.stringify(this.state)}</li>
          <li>
            <button onClick={this.props.onSignIn}>Sign In</button>
          </li>
          <li>
            <button onClick={this.props.onSignOut}>Sign Out</button>
          </li>
        </ul>
      </nav>
    );
  }
}

SiteNav.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  onSignIn: PropTypes.func.isRequired,
};

export default SiteNav;
