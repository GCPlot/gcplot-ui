'use strict';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, Input, Modal, ButtonInput, Button } from 'react-bootstrap';

class RealtimeConnection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Realtime Connection
          <small>Upload GC logs continuously</small>
        </h1>
      </section>
      <section className="content">
        <Row>
          <Col md={12}>
            <div className={"callout callout-info"}>
              <p>Upcoming feature for the first major platform release. Please stay tuned!</p>
            </div>
          </Col>
        </Row>
      </section>
    </div>;
  }
}

RealtimeConnection.displayName = 'RealtimeConnection';

RealtimeConnection.defaultProps = {
};

export default RealtimeConnection;
