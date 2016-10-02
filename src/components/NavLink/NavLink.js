import React from 'react';
import { Link } from 'react-router';

function NavLink (props) {
  return <Link {...props} />
}

NavLink.defaultProps = {
  activeClassName: 'active'
};

export default NavLink;
