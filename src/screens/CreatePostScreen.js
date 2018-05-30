import React from 'react';

import PostCreateForm from './../post/components/PostCreateForm';
import * as api from './../api';

const CreatePostScreen = () => {
  const onSubmit = data => {
    console.log('get data ', data);
    api.createPost(data);
  };

  return (
    <div>
      <h1>Create Post</h1>
      <hr />
      <PostCreateForm onSubmit={onSubmit} />
    </div>
  );
};

export default CreatePostScreen;
