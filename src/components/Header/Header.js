'use strict';

import React from 'react';
import Navigation from '../Navigation/Navigation';
import {Link} from 'react-router';

function Header () {
  return (
    <header className="main-header">
      {/* Logo  */}
      <Link to="/" className="logo">
        {/* mini logo for sidebar mini 50x50 pixels  */}
        <span className="logo-mini"><b>R</b></span>
        {/* logo for regular state and mobile devices  */}
        <span className="logo-lg"><b>Reactive</b>Admin</span>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
