import React from 'react';
import views from '@/admin/views';

import CreatePostForm from './../components/CreatePostForm';
import * as api from './../../api';

const onCreatePostFormSubmit = post => {
  api.createPost(post);
};
export default function CreatePostView() {
  return (
    <views.AdminBaseView>
      <h1>Create Blog Post</h1>
      <CreatePostForm onSubmit={onCreatePostFormSubmit} />
    </views.AdminBaseView>
  );
}
