import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SiteHeader = props => {
  const { user } = props;
  return (
    <div>
      <h1>
        <Link href to="/">
          My Blog
        </Link>
        {user ? (
          <img src={user.photoURL} alt={`${user.displayName} 's avatar`} />
        ) : (
          ''
        )}
      </h1>
    </div>
  );
};

SiteHeader.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  user: PropTypes.object,
};

SiteHeader.defaultProps = {
  user: null,
};

export default SiteHeader;
