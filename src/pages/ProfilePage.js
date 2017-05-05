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
      updatePasswordDisabled: false,
      emailErrorStyle: {
          display: "none",
          value: ""
      },
      updateEmailDisabled: false
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

  onUpdateEmailClick() {
    if (this.state.email != this.oldEmailText.value) {
      this.setState(update(this.state, {
        updateEmailDisabled: {$set: false},
        emailErrorStyle: {
            display: {$set: "block"},
            value: {$set: "Old e-mail is incorrect."}
        }
      }));
    } else {
      if (this.newEmailText.value == this.newEmailRepeatText.value) {
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
      } else {
        this.setState(update(this.state, {
          updateEmailDisabled: {$set: false},
          emailErrorStyle: {
              display: {$set: "block"},
              value: {$set: "E-mail values mismatch. Try entering again."}
          }
        }));
      }
    }
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
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Panel header="Username">
                  <FormGroup><FormControl type="text" label="Username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} inputRef={(r) => this.usernameText = r}/></FormGroup>
                  <p style={this.state.usernameErrorStyle}>{this.state.usernameErrorStyle.value}</p>
                  <button className="btn btn-block btn-primary" onClick={this.onUpdateUsernameClick.bind(this)} disabled={this.state.updateUsernameDisabled}>Update</button>
          </Panel>
          <Panel header="Change E-mail">
              <FormGroup><FormControl type="email" placeholder="Old E-mail" inputRef={(r) => this.oldEmailText = r}/></FormGroup>
              <FormGroup><FormControl type="email" placeholder="New E-mail" inputRef={(r) => this.newEmailText = r}/></FormGroup>
              <FormGroup><FormControl type="email" placeholder="Repeat New E-mail" inputRef={(r) => this.newEmailRepeatText = r}/></FormGroup>
              <p style={this.state.emailErrorStyle}>{this.state.emailErrorStyle.value}</p>
              <button className="btn btn-block btn-primary" onClick={this.onUpdateEmailClick.bind(this)} disabled={this.state.updateEmailDisabled}>Update</button>
          </Panel>
        </Col>
        <Col md={6}>
          <Panel header="Password">
                  <FormGroup><FormControl type="password" placeholder="Old Password" inputRef={(r) => this.oldPasswordText = r}/></FormGroup>
                  <FormGroup><FormControl type="password" placeholder="New Password" inputRef={(r) => this.newPasswordText = r}/></FormGroup>
                  <FormGroup><FormControl type="password" placeholder="Repeat New Password" inputRef={(r) => this.newPasswordRepeatText = r}/></FormGroup>
                  <p style={this.state.passwordErrorStyle}>{this.state.passwordErrorStyle.value}</p>
                  <button className="btn btn-block btn-primary" onClick={this.onUpdatePasswordClick.bind(this)} disabled={this.state.updatePasswordDisabled}>Update</button>
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
