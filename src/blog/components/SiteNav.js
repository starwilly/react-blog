import React from 'react';
import { Link } from 'react-router-dom';

function SiteNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href to="/admin/">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SiteNav;
