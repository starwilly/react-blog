import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SiteHeader from '../components/SiteHeader';

const SiteHeaderContainer = props => <SiteHeader user={props.user} />;

const mapStateToProps = state => ({
  user: state.auth.user,
});

SiteHeaderContainer.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(SiteHeaderContainer);
