import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import I from 'react-fontawesome';
import GCPlotCore from '../../core'
import { browserHistory } from 'react-router'

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

  profileClicked() {
    browserHistory.push("/profile");
    document.dispatchEvent(new MouseEvent('click'));
    return null;
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
              className=""
              title={
                <span>
                  <span className="hidden-xs">{this.state.full_name}</span>
                </span>
              }
              noCaret
            >
              <li><a href="#" onClick={this.profileClicked.bind(this)}>Profile</a></li>
              <MenuItem divider/>
              <li><a href="#" onClick={this.signOutClicked.bind(this)}>Sign out</a></li>
            </NavDropdown>
          </Nav>
        </div>
      </Navbar>

    );
  }
}

Navigation.displayName = 'Navigation';

export default Navigation;
