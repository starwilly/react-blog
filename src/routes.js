import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import PostList from './post/components/PostList';
// import BlogHome from './BlogHome';
// import PostDetail from './post/components/PostDetail';
// import CreatePostScreen from './screens/CreatePostScreen';
import adminRoutes from './admin/routes';
import BlogRoute from './blog/routes';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={adminRoutes} />
      {/* <Route path="/posts/create" component={CreatePostScreen} /> */}
      {/* <Route path="/posts/:id" component={PostDetail} /> */}
      <Route path="/" component={BlogRoute} />
    </Switch>
  </BrowserRouter>
);
