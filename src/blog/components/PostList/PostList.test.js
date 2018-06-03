import React from 'react';

import { shallow } from 'enzyme';

import PostList from './PostList';
import Post from './../Post';

const posts = [
  {
    id: 'p1',
    title: 'post1',
    text: 'text1',
  },
  {
    id: 'p2',
    title: 'post2',
    text: 'text2',
  },
];

describe('<PostList />', () => {
  const wrapper = shallow(<PostList posts={posts} />);

  test('PostList should render posts as <Post />', () => {
    expect(wrapper.find(Post)).toHaveLength(2);
  });
});
