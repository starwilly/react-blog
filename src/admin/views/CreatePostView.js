import React from 'react';

import CreatePostForm from './../components/CreatePostForm';
import * as api from './../../api';

const onCreatePostFormSubmit = post => {
  api.createPost(post);
};
export default function CreatePostView() {
  return (
    <div>
      <h1>Create Blog Post</h1>
      <CreatePostForm onSubmit={onCreatePostFormSubmit} />
    </div>
  );
}
