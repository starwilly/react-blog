import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { BlogIndexView, PostDetailView } from './views/';

export default function BlogRoute() {
  return (
    <Switch>
      <Route path="/posts/:id" component={PostDetailView} />
      <Route path="/" component={BlogIndexView} />
    </Switch>
  );
}
