import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PrivateRoute } from '@/auth/utils';

import authViews from './views';

const { PostListView, AdminIndexView, CreatePostView } = authViews;

export default function adminRoutes({ match }) {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          path={`${match.url}/posts/create`}
          component={CreatePostView}
        />
        <PrivateRoute path={`${match.url}/posts`} component={PostListView} />
        <PrivateRoute exact path={`${match.url}`} component={AdminIndexView} />
        <Route path={`${match.url}`} render={() => <Redirect to="/admin" />} />
      </Switch>
    </div>
  );
}

adminRoutes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};
