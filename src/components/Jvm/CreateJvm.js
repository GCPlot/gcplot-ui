'use strict';

import React from 'react';
import { Row, Col, Panel, Input, ButtonInput, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import I from 'react-fontawesome';
import GCPlotCore from '../../core'

var update = require('react-addons-update');

class CreateJvm extends React.Component {
  constructor(props) {
    super(props);
    var title = this.props.title || "New JVM";
    var versionValue = this.props.versionValue || "7";
    var collectorValue = this.props.collectorValue || "3";
    var jvmName = this.props.jvmName || "vm-" + GCPlotCore.rstr(7);
    this.state = {
      title: title,
      versionValue: versionValue,
      collectorValue: collectorValue,
      jvmName: jvmName
    };
  }

  componentDidMount() {
    var t = this.props.pp;

    t.state.cmps[this.props.cid + ""] = this;
    t.setState(t.state);
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Col md={this.props.md}>
        <Panel header={<div>{this.state.title}<I name="close pull-right" onClick={this.props.closeClickHandler} style={{cursor: "pointer"}} /></div>}>
          <form role="form">
            <Input type="text" label="Unique ID" defaultValue={this.state.jvmName} placeholder="JVM Identifier" ref={(r) => this.jvmIdText = r}/>
            <Input type="select" label="Version" className="select2" defaultValue={this.state.versionValue} style={{width: '100%'}} ref={(r) => this.versionSelector = r}>
              <option value="1">Hotspot 1.2.2</option>
              <option value="2">Hotspot 1.3.1</option>
              <option value="3">Hotspot 1.4</option>
              <option value="4">Hotspot 1.5</option>
              <option value="5">Hotspot 1.6</option>
              <option value="6">Hotspot 1.7</option>
              <option value="7">Hotspot 1.8</option>
              <option value="8">Hotspot 1.9</option>
            </Input>
            <Input type="select" label="Collector Type" defaultValue={this.state.collectorValue} className="select2" style={{width: '100%'}} ref={(r) => this.typeSelector = r}>
              <option value="1">Serial</option>
              <option value="2">Old GC</option>
              <option value="3">Parallel Old GC</option>
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
