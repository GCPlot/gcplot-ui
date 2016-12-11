import React from 'react';
import GCPlotCore from '../core'
var update = require('react-addons-update');
var ReactGA = require('react-ga');
ReactGA.initialize('UA-88807066-1');

class NewPasswordLayout extends React.Component {
  constructor(props) {
    super(props);
    require('../styles/skeleton/custom.css');
    require('../styles/skeleton/normalize.css');
    require('../styles/skeleton/skeleton.css');

    this.state = {
      errorStyle: {
        display: "none",
        value: "",
        color: 'red'
      },
    };
  }

  onSave() {
    if (this.newPasswordText.value == "" && this.newPasswordRepeatText.value == "") {
      this.setState(update(this.state, {
        errorStyle: {
          display: {$set: "block"},
          value: {$set: "Password can't be empty."}
        }
      }));
    } else if (this.newPasswordText.value != this.newPasswordRepeatText.value) {
      this.setState(update(this.state, {
        errorStyle: {
          display: {$set: "block"},
          value: {$set: "Passwords are not the same."}
        }
      }));
    } else {
      GCPlotCore.newPassword(this.props.token, this.props.salt, this.newPasswordText.value, function() {
        GCPlotCore.setToken(this.props.token);
        if (!location.origin) {
          location.origin = location.protocol + "//" + location.host;
        }
        window.location.replace(location.origin);
      }.bind(this), function(code, title, msg) {
        this.setState(update(this.state, {
          errorStyle: {
            display: {$set: "block"},
            value: {$set: msg}
          }
        }));
      }.bind(this));
    }
  }

  render() {
    return <div className="container">
      <div className="row">
        <section className="header">
          <h1 className="title">
              <b>GC</b>Plot
          </h1>
          <input className="u-full-width" type="password" autofocus placeholder="New Password" ref={(r) => this.newPasswordText = r}/>
          <input className="u-full-width" type="password" placeholder="Repeat New Password" ref={(r) => this.newPasswordRepeatText = r}/>
          <p style={this.state.errorStyle}>{this.state.errorStyle.value}</p>
          <input className="button-primary" type="submit" onClick={this.onSave.bind(this)} value="Save"/>
        </section>
      </div>
    </div>;
  }
}

NewPasswordLayout.defaultProps = {};

export default NewPasswordLayout;
