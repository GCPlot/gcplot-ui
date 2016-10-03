import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar
        staticTop
        fluid
      >
        {/* Sidebar toggle button */}
        <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
        {/* Navbar Right Menu  */}
        <div className="navbar-custom-menu">
          <Nav>
            <NavDropdown
              id="user-menu"
              className="user user-menu"
              title={
                <span>
                  <img src="img/user2-160x160.jpg" className="user-image" alt="User Image" />
                  <span className="hidden-xs">John Doe</span>
                </span>
              }
              noCaret
            >
              {/* User image  */}
              <li className="user-header">
                <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                <p>
                  John Doe - Web Designer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              {/* Menu Body  */}
              <li className="user-body">
                <div className="col-xs-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </li>
              {/* Menu Footer */}
              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="#" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>

    );
  }
}

Navigation.displayName = 'Navigation';

export default Navigation;
