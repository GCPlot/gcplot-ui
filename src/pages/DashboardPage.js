require('script!jquery')

import React from 'react';
import { Row, Col, ProgressBar, Panel } from 'react-bootstrap';

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
        <small>DEMO</small>
      </h1>
    </section>
      <section className="content">
      </section>
    </div>
  }
}

DashboardPage.displayName = 'DashboardPage';

DashboardPage.defaultProps = {
};

export default DashboardPage;
