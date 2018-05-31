import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/posts/create" href>
            Create Post
          </Link>
        </li>
        <li>
          <Link href to="/posts/">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
