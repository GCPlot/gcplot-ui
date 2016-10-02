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
              id="messages-menu"
              className="messages-menu"
              title={
                <span>
                  <i className="fa fa-envelope-o"></i>
                  <span className="label label-success">4</span>
                </span>
              }
              noCaret
            >
              <li className="header">You have 4 messages</li>
              <li>
                {/* inner menu: contains the actual data  */}
                <ul className="menu">
                  <li>{/* start message  */}
                    <a href="#">
                      <div className="pull-left">
                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                      </div>
                      <h4>
                        Support Team
                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      <p>Get Reactive Admin Theme</p>
                    </a>
                  </li>{/* end message  */}
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="img/user3-128x128.jpg" className="img-circle" alt="User Image" />
                      </div>
                      <h4>
                        Reactive Admin Team
                        <small><i className="fa fa-clock-o"></i> 2 hours</small>
                      </h4>
                      <p>Get Reactive Admin Theme</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="img/user4-128x128.jpg" className="img-circle" alt="User Image" />
                      </div>
                      <h4>
                        Developers
                        <small><i className="fa fa-clock-o"></i> Today</small>
                      </h4>
                      <p>Get Reactive Admin Theme</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="img/user3-128x128.jpg" className="img-circle" alt="User Image" />
                      </div>
                      <h4>
                        Sales Department
                        <small><i className="fa fa-clock-o"></i> Yesterday</small>
                      </h4>
                      <p>Get Reactive Admin Theme</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pull-left">
                        <img src="img/user4-128x128.jpg" className="img-circle" alt="User Image" />
                      </div>
                      <h4>
                        Reviewers
                        <small><i className="fa fa-clock-o"></i> 2 days</small>
                      </h4>
                      <p>Get Reactive Admin Theme</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="#">See All Messages</a></li>
            </NavDropdown>

            {/* Notifications: style can be found in dropdown.less  */}
            <NavDropdown
              id="notifications-menu"
              className="notifications-menu"
              title={
                <span>
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </span>
              }
              noCaret
            >
              <li className="header">You have 10 notifications</li>
              <li>
                {/* inner menu: contains the actual data  */}
                <ul className="menu">
                  <li>
                    <a href="#">
                      <i className="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-warning text-yellow"></i> Very long description here that may not fit into the page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-users text-red"></i> 5 new members joined
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-cart text-green"></i> 25 sales made
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-user text-red"></i> You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="#">View all</a></li>
            </NavDropdown>

            <NavDropdown
              id="tasks-menu"
              className="tasks-menu"
              title={
                <span>
                  <i className="fa fa-flag-o"></i>
                  <span className="label label-danger">9</span>
                </span>
              }
              noCaret
            >
              <li className="header">You have 9 tasks</li>
              <li>
                {/* inner menu: contains the actual data  */}
                <ul className="menu">
                  <li>{/* Task item  */}
                    <a href="#">
                      <h3>
                        Design some buttons
                        <small className="pull-right">20%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-aqua" style={{width: '20%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>{/* end task item  */}
                  <li>{/* Task item  */}
                    <a href="#">
                      <h3>
                        Create a nice theme
                        <small className="pull-right">40%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-green" style={{width: '40%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>{/* end task item  */}
                  <li>{/* Task item  */}
                    <a href="#">
                      <h3>
                        Some task I need to do
                        <small className="pull-right">60%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-red" style={{width: '60%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>{/* end task item  */}
                  <li>{/* Task item  */}
                    <a href="#">
                      <h3>
                        Make beautiful transitions
                        <small className="pull-right">80%</small>
                      </h3>
                      <div className="progress xs">
                        <div className="progress-bar progress-bar-yellow" style={{width: '80%'}} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span className="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>{/* end task item  */}
                </ul>
              </li>
              <li className="footer">
                <a href="#">View all tasks</a>
              </li>
            </NavDropdown>

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
