import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import I from 'react-fontawesome';
import GCPlotCore from '../../core'

var update = require('react-addons-update');

class Navigation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        full_name: ""
      };
  }

  onProfileChange() {
    var t = this;
    GCPlotCore.userInfo((function(data) {
      this.setState(update(t.state, {
        full_name: {$set: data.first_name + " " + data.last_name}
      }));
    }).bind(this));
  }

  componentWillMount() {
    GCPlotCore.on(GCPlotCore.PROFILE_CHANGED_EVENT, this.onProfileChange.bind(this));
    GCPlotCore.trigger(GCPlotCore.PROFILE_CHANGED_EVENT);
  }

  componentWillUnmount() {
    GCPlotCore.off(GCPlotCore.PROFILE_CHANGED_EVENT, this.onProfileChange.bind(this));
  }

  signOutClicked() {
    GCPlotCore.logoff();
    location.reload();
  }

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
                  <span className="hidden-xs">{this.state.full_name}</span>
                </span>
              }
              noCaret
            >
              {/* Menu Footer */}
              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="#" className="btn btn-default btn-flat" onClick={this.signOutClicked.bind(this)}>Sign out</a>
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
