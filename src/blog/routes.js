import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { BlogIndexView, PostDetailView } from './views/';
import SiteHeaderContainer from '../common/containers/SiteHeaderContainer';

export default function BlogRoute() {
  return (
    <div>
      <SiteHeaderContainer />
      <Switch>
        <Route path="/posts/:id" component={PostDetailView} />
        <Route path="/" component={BlogIndexView} />
      </Switch>
    </div>
  );
}
