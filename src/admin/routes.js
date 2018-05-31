import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AdminNav from './components/AdminNav';
import { AdminIndexView, CreatePostView } from './views';

export default function adminRoutes({ match }) {
  return (
    <div>
      <AdminNav />
      <Switch>
        <Route path={`${match.url}/posts/create`} component={CreatePostView} />
        <Route path={`${match.url}`} component={AdminIndexView} />
      </Switch>
    </div>
  );
}

adminRoutes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
