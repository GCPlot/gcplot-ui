'use strict';

import React from 'react';
import { Row, Col, Panel, Input, ButtonInput, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import I from 'react-fontawesome';
import GCPlotCore from '../../core'

var update = require('react-addons-update');

class CreateJvm extends React.Component {
  componentDidMount() {
    var t = this.props.pp;
    var newState = {};
    newState[this.props.cid + ""] = this;

    t.setState(update(t.state, {
      cmps: {$merge: newState}
    }));
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Col md={this.props.md}>
        <Panel header={<div>New JVM<I name="close pull-right" onClick={this.props.closeClickHandler} style={{cursor: "pointer"}} /></div>}>
          <form role="form">
            <Input type="text" label="Unique ID" defaultValue={"vm-" + GCPlotCore.rstr(6)} placeholder="JVM Identifier" ref={(r) => this.jvmIdText = r}/>
            <Input type="select" label="Version" className="select2" style={{width: '100%'}} ref={(r) => this.versionSelector = r}>
              <option value="1">Hotspot 1.2.2</option>
              <option value="2">Hotspot 1.3.1</option>
              <option value="3">Hotspot 1.4</option>
              <option value="4">Hotspot 1.5</option>
              <option value="5">Hotspot 1.6</option>
              <option value="6">Hotspot 1.7</option>
              <option value="7" selected="selected">Hotspot 1.8</option>
              <option value="8">Hotspot 1.9</option>
            </Input>
            <Input type="select" label="Collector Type" className="select2" style={{width: '100%'}} ref={(r) => this.typeSelector = r}>
              <option value="1">Serial</option>
              <option value="2">Old GC</option>
              <option value="3" selected="selected">Parallel Old GC</option>
              <option value="4">Concurrent Mark Sweep (CMS)</option>
              <option value="5">Garbage One (G1)</option>
            </Input>
          </form>
        </Panel>
      </Col>);
  }

}

CreateJvm.defaultProps = {
  md: 3,
  closeClickHandler: function() {}
};

export default CreateJvm;
