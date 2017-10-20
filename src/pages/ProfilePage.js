'use strict';

import $ from 'jquery';

import React from 'react';
import { Row, Col, Panel, Tabs, Checkbox, Tab, ButtonGroup, FormControl, FormGroup, InputGroup, Modal, ButtonInput, Button } from 'react-bootstrap';
import GCPlotCore from '../core'
import I from 'react-fontawesome';
var update = require('react-addons-update');
var clipboard = require('clipboard-js');

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      token: "",
      email: "",
      notification_email: "",
      username: "",
      config: {
        preload_analysis: true,
        notifications_enabled: true,
        notify_realtime_agent_health: true
      },
      updateUsernameDisabled: false,
      usernameErrorStyle: {
          display: "none",
          color: 'red',
          value: ""
      },
      passwordErrorStyle: {
          display: "none",
          color: 'red',
          value: ""
      },
      updatePasswordDisabled: false,
      emailErrorStyle: {
          display: "none",
          value: ""
      },
      updateEmailDisabled: false,
      notificationEmailErrorStyle: {
          display: "none",
          value: ""
      },
      updateNotificationEmailDisabled: false,
      activeTab: "profile_tab"
    }
  }

  componentDidMount() {
    GCPlotCore.userInfo(function(userInfo) {
      this.setState(update(this.state, {
        fullname: {$set: userInfo.first_name + " " + userInfo.last_name},
        token: {$set: userInfo.token},
        email: {$set: userInfo.email},
        notification_email: {$set: userInfo.notification_email},
        username: {$set: userInfo.username},
        config: {
          preload_analysis: {$set: userInfo.config.preload_analysis},
          notifications_enabled: {$set: userInfo.config.notifications_enabled},
          notify_realtime_agent_health: {$set: userInfo.config.notify_realtime_agent_health}
        }
      }));
    }.bind(this));
  }

  copyIdClick() {
    clipboard.copy(this.state.token);
  }

  copyEmailClick() {
    clipboard.copy(this.state.email);
  }

  copyNotificationEmailClick() {
    clipboard.copy(this.state.notification_email);
  }

  handleUsernameChange(event) {
    this.setState(update(this.state, {
      username: {$set: event.target.value}
    }));
  }

  onUpdateUsernameClick() {
    this.setState(update(this.state, {
      updateUsernameDisabled: {$set: true},
      usernameErrorStyle: {
          display: {$set: "none"},
          value: {$set: ""}
      }
    }));
    GCPlotCore.changeUsername(this.usernameText.value, function() {
      this.setState(update(this.state, {
        usernameErrorStyle: {
            display: {$set: "block"},
            value: {$set: "Username successfully changed"},
            color: {$set: 'black'}
        }
      }));
      setTimeout(function() {
        this.setState(update(this.state, {
          updateUsernameDisabled: {$set: false},
          usernameErrorStyle: {
              display: {$set: "none"},
              value: {$set: ""},
              color: {$set: 'red'}
          }
        }));
      }.bind(this), 1000);
    }.bind(this), function(code, title, msg) {
      this.setState(update(this.state, {
        updateUsernameDisabled: {$set: false},
        usernameErrorStyle: {
            display: {$set: "block"},
            value: {$set: msg}
        }
      }));
    }.bind(this));
  }

  onUpdatePasswordClick() {
    this.setState(update(this.state, {
      updatePasswordDisabled: {$set: true},
      passwordErrorStyle: {
          display: {$set: "none"},
          value: {$set: ""}
      }
    }));
    GCPlotCore.changePassword(this.oldPasswordText.value, this.newPasswordText.value, function() {
      this.setState(update(this.state, {
        passwordErrorStyle: {
            display: {$set: "block"},
            value: {$set: "Password successfully changed"},
            color: {$set: 'black'}
        }
      }));
      setTimeout(function() {
        this.setState(update(this.state, {
          updatePasswordDisabled: {$set: false},
          passwordErrorStyle: {
              display: {$set: "none"},
              value: {$set: ""},
              color: {$set: 'red'}
          }
        }));
      }.bind(this), 1000);
    }.bind(this), function(code, title, msg) {
      this.setState(update(this.state, {
        updatePasswordDisabled: {$set: false},
        passwordErrorStyle: {
            display: {$set: "block"},
            value: {$set: msg}
        }
      }));
    }.bind(this));
  }

  onUpdateEmailClick() {
        this.setState(update(this.state, {
          updateEmailDisabled: {$set: true},
          emailErrorStyle: {
              display: {$set: "none"},
              value: {$set: ""}
          }
        }));
        GCPlotCore.changeEmail(this.newEmailText.value, () => {
          this.setState(update(this.state, {
            emailErrorStyle: {
                display: {$set: "block"},
                value: {$set: "E-mail successfully changed"},
                color: {$set: 'black'}
            },
            email: {$set: this.newEmailText.value}
          }));
          setTimeout(function() {
            this.setState(update(this.state, {
              updateEmailDisabled: {$set: false},
              emailErrorStyle: {
                  display: {$set: "none"},
                  value: {$set: ""}
              }
            }));
          }.bind(this), 1000);
        }, (code, title, msg) => {
          this.setState(update(this.state, {
            updateEmailDisabled: {$set: false},
            emailErrorStyle: {
                display: {$set: "block"},
                value: {$set: msg}
            }
          }));
        });
  }

  onUpdateNotificationEmailClick() {
    this.setState(update(this.state, {
          updateNotificationEmailDisabled: {$set: true},
          notificationEmailErrorStyle: {
              display: {$set: "none"},
              value: {$set: ""}
          }
        }));
        GCPlotCore.changeNotificationEmail(this.newNotificationEmailText.value, () => {
          this.setState(update(this.state, {
            notificationEmailErrorStyle: {
                display: {$set: "block"},
                value: {$set: "Notification e-mail successfully changed"},
                color: {$set: 'black'}
            },
            notification_email: {$set: this.newNotificationEmailText.value}
          }));
          setTimeout(function() {
            this.setState(update(this.state, {
              updateNotificationEmailDisabled: {$set: false},
              notificationEmailErrorStyle: {
                  display: {$set: "none"},
                  value: {$set: ""}
              }
            }));
          }.bind(this), 1000);
        }, (code, title, msg) => {
          this.setState(update(this.state, {
            updateNotificationEmailDisabled: {$set: false},
            notificationEmailErrorStyle: {
                display: {$set: "block"},
                value: {$set: msg}
            }
          }));
        });
  }

  onTabClick(e) {
    this.setState(update(this.state, {
      activeTab: {$set: e}
    }));
  }

  handlePrAnChange(e) {
    this.setState(update(this.state, {
      config: {
        preload_analysis: {$set: e.target.checked}
      }
    }));
    GCPlotCore.updateAccountConfig(GCPlotCore.ACCOUNT_CONF_IDS.PRELOAD_ANALYSIS_ON_PAGE_OPEN, e.target.checked);
  }

  handleNotificationsChange(e) {
    this.setState(update(this.state, {
      config: {
        notifications_enabled: {$set: e.target.checked}
      }
    }));
    GCPlotCore.updateAccountConfig(GCPlotCore.ACCOUNT_CONF_IDS.NOTIFICATIONS_ENABLED, e.target.checked);
  }

  handleRTNotificationsChange(e) {
    this.setState(update(this.state, {
      config: {
        notify_realtime_agent_health: {$set: e.target.checked}
      }
    }));
    GCPlotCore.updateAccountConfig(GCPlotCore.ACCOUNT_CONF_IDS.NOTIFY_REALTIME_AGENT_HEALTH, e.target.checked);
  }

  render() {
    return <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Your Profile
      </h1>
    </section>
    <section className="content">
      <ul className="nav nav-stacked col-sm-2 col-md-2">
  <li className={this.state.activeTab == 'profile_tab' ? 'active' : ''}><a href="#" onClick={this.onTabClick.bind(this, 'profile_tab')}>General</a></li>
  <li className={this.state.activeTab == 'settings_tab' ? 'active' : ''}><a href="#" onClick={this.onTabClick.bind(this, 'settings_tab')}>Settings</a></li>
  <li className={this.state.activeTab == 'api_tab' ? 'active' : ''}><a href="#" onClick={this.onTabClick.bind(this, 'api_tab')}>API</a></li>
</ul>
<div className="tab-content col-sm-10 col-md-10" style={{ padding: '0px' }}>
        <div className={(this.state.activeTab == 'profile_tab' ? 'active ' : '') + "tab-pane"} id="profile_tab">
          <Row>
            <Col md={12}>
              <Panel>
                    <FormGroup>Full Name:<FormControl type="text" label="Full Name" disabled={true} value={this.state.fullname} /></FormGroup>
                    <FormGroup>E-mail:<InputGroup>
                      <FormControl type="text" label="E-mail" disabled={true} value={this.state.email} />
                      <InputGroup.Addon><I name = "clipboard" style = {{cursor: "pointer"}} onClick = {
                          this.copyEmailClick.bind(this)
                      } /></InputGroup.Addon>
                    </InputGroup></FormGroup>
                    <FormGroup>Notification e-mail:<InputGroup>
                      <FormControl type="text" label="Notification e-mail" disabled={true} value={this.state.notification_email} />
                      <InputGroup.Addon><I name = "clipboard" style = {{cursor: "pointer"}} onClick = {
                          this.copyNotificationEmailClick.bind(this)
                      } /></InputGroup.Addon>
                    </InputGroup></FormGroup>
                    <hr />
                    <Row>
                    <Col md={4}>
                      <Panel header="Change Username">
                        <FormGroup><FormControl type="text" label="Username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} inputRef={(r) => this.usernameText = r}/></FormGroup>
                        <p style={this.state.usernameErrorStyle}>{this.state.usernameErrorStyle.value}</p>
                        <button className="btn btn-block btn-primary" onClick={this.onUpdateUsernameClick.bind(this)} disabled={this.state.updateUsernameDisabled}>Update</button>
                      </Panel>
                    </Col>
                    <Col md={4}>
                      <Panel header="Change E-mail">
                          <FormGroup><FormControl type="email" placeholder="New E-mail" inputRef={(r) => this.newEmailText = r}/></FormGroup>
                          <p style={this.state.emailErrorStyle}>{this.state.emailErrorStyle.value}</p>
                          <button className="btn btn-block btn-primary" onClick={this.onUpdateEmailClick.bind(this)} disabled={this.state.updateEmailDisabled}>Update</button>
                      </Panel>
                    </Col>
                    <Col md={4}>
                      <Panel header="Change Notification E-mail">
                          <FormGroup><FormControl type="email" placeholder="Notification E-mail" inputRef={(r) => this.newNotificationEmailText = r}/></FormGroup>
                          <p style={this.state.notificationEmailErrorStyle}>{this.state.notificationEmailErrorStyle.value}</p>
                          <button className="btn btn-block btn-primary" onClick={this.onUpdateNotificationEmailClick.bind(this)} disabled={this.state.updateNotificationEmailDisabled}>Update</button>
                      </Panel>
                    </Col>
                    <Col md={4}>
                      <Panel header="Change Password">
                              <FormGroup><FormControl type="password" placeholder="Old Password" inputRef={(r) => this.oldPasswordText = r}/></FormGroup>
                              <FormGroup><FormControl type="password" placeholder="New Password" inputRef={(r) => this.newPasswordText = r}/></FormGroup>
                              <FormGroup><FormControl type="password" placeholder="Repeat New Password" inputRef={(r) => this.newPasswordRepeatText = r}/></FormGroup>
                              <p style={this.state.passwordErrorStyle}>{this.state.passwordErrorStyle.value}</p>
                              <button className="btn btn-block btn-primary" onClick={this.onUpdatePasswordClick.bind(this)} disabled={this.state.updatePasswordDisabled}>Update</button>
                      </Panel>
                    </Col>
                  </Row>
              </Panel>
            </Col>
          </Row>
        </div>
        <div className={(this.state.activeTab == 'settings_tab' ? 'active ' : '') + "tab-pane"} id="settings_tab">
            <Panel>
              <Checkbox checked={this.state.config.preload_analysis} onChange={this.handlePrAnChange.bind(this)}>
                  Pre-load analysis on report open?
              </Checkbox>
              <Checkbox checked={this.state.config.notifications_enabled} onChange={this.handleNotificationsChange.bind(this)}>
                  Notifications enabled?
              </Checkbox>
              <Checkbox checked={this.state.config.notify_realtime_agent_health} onChange={this.handleRTNotificationsChange.bind(this)}>
                  Real-time agent health notifications enabled?
              </Checkbox>
            </Panel>
        </div>
        <div className={(this.state.activeTab == 'api_tab' ? 'active ' : '') + "tab-pane"} id="api_tab">
          <Panel>
          <FormGroup>API Token:<InputGroup>
            <FormControl type="text" label="API Token" disabled={true} value={this.state.token} />
            <InputGroup.Addon><I name = "clipboard" style = {{cursor: "pointer"}} onClick = {
                this.copyIdClick.bind(this)
            } /></InputGroup.Addon>
          </InputGroup></FormGroup>
        </Panel>
        </div>
      </div>

    </section>
    </div>;
  }
}

ProfilePage.displayName = 'ProfilePage';

ProfilePage.defaultProps = {
};

export default ProfilePage;
