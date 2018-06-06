import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PrivateRoute } from '@/auth/utils';

import CreatePostView from './views/CreatePostView';
import AdminIndexView from './views/AdminIndexView';

export default function adminRoutes({ match }) {
  return (
    <div>
      <Switch>
        <PrivateRoute
          path={`${match.url}/posts/create`}
          component={CreatePostView}
        />
        <PrivateRoute path={`${match.url}`} component={AdminIndexView} />
      </Switch>
    </div>
  );
}

adminRoutes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
