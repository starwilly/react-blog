import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import CreatePostView from './views/CreatePostView';
import AdminIndexView from './views/AdminIndexView';

export default function adminRoutes({ match }) {
  return (
    <div>
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
