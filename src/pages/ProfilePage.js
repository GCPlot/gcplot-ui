'use strict';

import $ from 'jquery';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, FormControl, FormGroup, InputGroup, Modal, ButtonInput, Button } from 'react-bootstrap';
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
      username: "",
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
      updatePasswordDisabled: false
    }
  }

  componentDidMount() {
    GCPlotCore.userInfo(function(userInfo) {
      this.setState(update(this.state, {
        fullname: {$set: userInfo.first_name + " " + userInfo.last_name},
        token: {$set: userInfo.token},
        email: {$set: userInfo.email},
        username: {$set: userInfo.username}
      }));
    }.bind(this));
  }

  copyIdClick() {
    clipboard.copy(this.state.token);
  }

  copyEmailClick() {
    clipboard.copy(this.state.email);
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

  render() {
    return <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Public Profile
      </h1>
    </section>
    <section className="content">
      <Row>
        <Col md={12}>
          <Panel>
            <form role="form">
                <FormGroup><FormControl type="text" label="Full Name" disabled={true} value={this.state.fullname} /></FormGroup>
                <FormGroup><InputGroup>
                  <FormControl type="text" label="API Token" disabled={true} value={this.state.token} />
                  <InputGroup.Addon><I name = "clipboard" style = {{cursor: "pointer"}} onClick = {
                      this.copyIdClick.bind(this)
                  } /></InputGroup.Addon>
                </InputGroup></FormGroup>
                <FormGroup><InputGroup>
                  <FormControl type="text" label="E-mail" disabled={true} value={this.state.email} />
                  <InputGroup.Addon><I name = "clipboard" style = {{cursor: "pointer"}} onClick = {
                      this.copyEmailClick.bind(this)
                  } /></InputGroup.Addon>
                </InputGroup></FormGroup>
            </form>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Panel header="Username">
            <form role="form">
                  <FormGroup><FormControl type="text" label="Username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} inputRef={(r) => this.usernameText = r}/></FormGroup>
                  <p style={this.state.usernameErrorStyle}>{this.state.usernameErrorStyle.value}</p>
                  <button className="btn btn-block btn-primary" onClick={this.onUpdateUsernameClick.bind(this)} disabled={this.state.updateUsernameDisabled}>Update</button>
            </form>
          </Panel>
        </Col>
        <Col md={6}>
          <Panel header="Password">
            <form role="form">
                  <FormGroup><FormControl type="password" placeholder="Old Password" inputRef={(r) => this.oldPasswordText = r}/></FormGroup>
                  <FormGroup><FormControl type="password" placeholder="New Password" inputRef={(r) => this.newPasswordText = r}/></FormGroup>
                  <FormGroup><FormControl type="password" placeholder="Repeat New Password" inputRef={(r) => this.newPasswordRepeatText = r}/></FormGroup>
                  <p style={this.state.passwordErrorStyle}>{this.state.passwordErrorStyle.value}</p>
                  <button className="btn btn-block btn-primary" onClick={this.onUpdatePasswordClick.bind(this)} disabled={this.state.updatePasswordDisabled}>Update</button>
            </form>
          </Panel>
        </Col>
      </Row>
    </section>
    </div>;
  }
}

ProfilePage.displayName = 'ProfilePage';

ProfilePage.defaultProps = {
};

export default ProfilePage;
