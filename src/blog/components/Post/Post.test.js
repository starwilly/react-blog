import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from 'enzyme';
import Post from './Post';

const post = {
  id: 'post-id',
  title: 'post-test-title',
  text: 'This is a new post',
};

describe('<Post /> header', () => {
  const wrapper = render(
    <MemoryRouter>
      <Post post={post} />
    </MemoryRouter>
  );

  it('should contains header link', () => {
    expect(wrapper.find('header a')).toHaveLength(1);
  });

  test('header link should contains post title', () => {
    expect(wrapper.find('header a').text()).toEqual('post-test-title');
  });

  test('link should have correct url', () => {
    expect(wrapper.find('header a').attr('href')).toEqual('/posts/post-id');
  });
});
