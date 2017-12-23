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
          <p>Welcome to GCPlot!</p>
          <p>You can already upload and process your Hotspot GC logs by navigating to <NavLink to="/quick_process">Quick Process</NavLink> page. We also have a <a href="https://docs.gcplot.com/log-files-processing.html" target="_blank">Realtime Connection</a> feature, which allows you to continuously connect your JVM GC logs with our platform.</p>
          <p>We would be glad to hear your questions and suggestions, as well as receive bug reports, at our <a href="https://groups.google.com/forum/#!forum/gcplot" target="_blank">Google Forum</a>. Alternatively, you can contact us directly at <a href="mailto:support@gcplot.com">support@gcplot.com</a></p>
      </Panel>
      </section>
    </div>
  }
}

DashboardPage.displayName = 'DashboardPage';

DashboardPage.defaultProps = {
};

export default DashboardPage;
