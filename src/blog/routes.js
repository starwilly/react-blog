import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { BlogIndexView, PostDetailView } from './views/';
import SiteHeader from '../common/components/SiteHeader';

export default function BlogRoute() {
  return (
    <div>
      <SiteHeader />
      <Switch>
        <Route path="/posts/:id" component={PostDetailView} />
        <Route path="/" component={BlogIndexView} />
      </Switch>
    </div>
  );
}
