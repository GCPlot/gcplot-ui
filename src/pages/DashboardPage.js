require('script!jquery')

import React from 'react';
import { Row, Col, ProgressBar, Panel } from 'react-bootstrap';
import NavLink from '../components/NavLink/NavLink'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {

  }

  render() {
    return <div className="content-wrapper">
    <section className="content-header">
      <h1>
        GCPLOT
        <small>DASHBOARD</small>
      </h1>
    </section>
      <section className="content">
        <Panel>
          <p><h4>Welcome on board!</h4></p>
          <p>We are currently at a <i>Beta</i> stage, so this page will be filling with something useful continuously.</p>
          <p>You can already upload and process your Hotspot GC logs. There is no limitations on the amount of transmitted data at the moment, so do not miss this moment and go to <code><NavLink to="/quick_process">Quick Process</NavLink></code> page. We are also working hard on the <code>Realtime Connection</code> feature, which will allow you to continuously connect your JVM GC logs to our analyser.</p>
          <p>We would be glad to hear your questions and suggestions, as well as receive bug reports, at our <a href="https://groups.google.com/forum/#!forum/gcplot" target="_blank">Google Forum</a>. Alternatively, you can contact us directly at support@gcplot.com</p>
      </Panel>
      </section>
    </div>
  }
}

DashboardPage.displayName = 'DashboardPage';

DashboardPage.defaultProps = {
};

export default DashboardPage;
