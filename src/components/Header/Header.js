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
        <span className="logo-mini"><b>GС</b></span>
        {/* logo for regular state and mobile devices  */}
        <span className="logo-lg"><img src="/img/logo.png" style={{"margin-top": "-5px", "margin-right": "5px"}} height="40" width="40"></img>GCPlot</span>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
