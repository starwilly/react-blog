import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PostList from './post/components/PostList';
// import BlogHome from './BlogHome';
import PostDetail from './post/components/PostDetail';
import CreatePostScreen from './screens/CreatePostScreen';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/posts/create" component={CreatePostScreen} />
      <Route path="/posts/:id" component={PostDetail} />
      <Route path="/" component={PostList} />
    </Switch>
  </BrowserRouter>
);
