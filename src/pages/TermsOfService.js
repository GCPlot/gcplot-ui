'use strict';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, Input, Modal, ButtonInput, Button } from 'react-bootstrap';

class TermsOfService extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="content-wrapper">
      <section className="content">
        <iframe src="/assets/terms.html" width="100%" height="2000px" frameBorder="0">Browser not compatible.</iframe>
      </section>
    </div>;
  }
}

TermsOfService.displayName = 'TermsOfService';

TermsOfService.defaultProps = {
};

export default TermsOfService;
