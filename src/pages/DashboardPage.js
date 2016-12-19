require('script!jquery')

import React from 'react';
import { Row, Col, ProgressBar, Panel } from 'react-bootstrap';
import NavLink from '../components/NavLink/NavLink'
import GCPlotCore from '../core'
var update = require('react-addons-update')

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: true,
      resendDisabled: false,
      resendCaption: "Resend"
    };
  }

  componentDidMount () {
    GCPlotCore.userInfo(function(userInfo) {
      this.setState(update(this.state, {
        confirmed: {$set: userInfo.confirmed}
      }));
    }.bind(this));
  }

  onResendClick() {
    this.setState(update(this.state, {
      resendCaption: {$set: "Sending ..."},
      resendDisabled: {$set: true}
    }));
    GCPlotCore.sendConfirmation(function() {
      this.setState(update(this.state, {
        resendCaption: {$set: "Sent"},
        resendDisabled: {$set: true}
      }));
      setTimeout(function() {
        this.setState(update(this.state, {
          resendCaption: {$set: "Resend"},
          resendDisabled: {$set: false}
        }));
      }.bind(this), 10000);
    }.bind(this), function(code, title, msg) {
      this.setState(update(this.state, {
        resendCaption: {$set: msg},
        resendDisabled: {$set: false}
      }));
    }.bind(this));
  }

  render() {
    return <div className="content-wrapper">
    <section className="content-header">
      <h1>
        
        <small>DASHBOARD</small>
      </h1>
    </section>
      <section className="content">
        <Panel>
          <p>We are currently at a <i>βeta</i> stage, so this page will be filling with something useful continuously.</p>
          <p>You can already upload and process your Hotspot GC logs. There is no limitations on the amount of transmitted data at the moment, so do not miss this moment and go to <code><NavLink to="/quick_process">Quick Process</NavLink></code> page. We are also working hard on the <u>Realtime Connection</u> feature, which will allow you to continuously connect your JVM GC logs with our platform.</p>
          <p>We would be glad to hear your questions and suggestions, as well as receive bug reports, at our <a href="https://groups.google.com/forum/#!forum/gcplot" target="_blank">Google Forum</a>. Alternatively, you can contact us directly at support@gcplot.com</p>
      </Panel>
      {(() => {
        if (!this.state.confirmed) {
          return <Row>
            <Col md={12}>
              <div className="callout callout-info">
                <h4>Your account is not verified</h4>
                <p>In order to have full access to all features, you must verify your account. The instructions were sent to the e-mail provided during registration.</p>
                <Row>
                  <Col md={2}>
                    <button className="btn btn-block btn-primary" onClick={this.onResendClick.bind(this)} disabled={this.state.resendDisabled}>{this.state.resendCaption}</button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>;
        }
      })()}
      </section>
    </div>
  }
}

DashboardPage.displayName = 'DashboardPage';

DashboardPage.defaultProps = {
};

export default DashboardPage;
