import React from 'react';
import { Link } from 'react-router-dom';

const SiteHeader = () => (
  <div>
    <h1>
      <Link href to="/">
        My Blog
      </Link>
    </h1>
  </div>
);

export default SiteHeader;
