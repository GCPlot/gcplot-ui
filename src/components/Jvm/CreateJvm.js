'use strict';

import React from 'react';
import { Row, Col, Panel, FormControl, FormGroup, ButtonInput, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import I from 'react-fontawesome';
import GCPlotCore from '../../core'

var update = require('react-addons-update');

class CreateJvm extends React.Component {
  constructor(props) {
    super(props);
    var rstr = GCPlotCore.rstr(7);

    var title = this.props.title || "New JVM";
    var versionValue = this.props.versionValue || "7";
    var collectorValue = this.props.collectorValue || "3";
    var jvmId = this.props.jvmId || "vm-" + rstr;
    var jvmName = this.props.jvmName || "VM " + rstr
    var idDisabled = this.props.idDisabled || false;
    this.state = {
      title: title,
      versionValue: versionValue,
      collectorValue: collectorValue,
      jvmId: jvmId,
      jvmName: jvmName,
      idDisabled: idDisabled
    };
  }

  componentDidUpdate() {
    if (this.props.idDisabled != this.state.idDisabled) {
      this.setState(update(this.state, {
        idDisabled: {$set: this.props.idDisabled}
      }));
    }
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
            <FormGroup><FormControl type="text" label="Unique ID" disabled={this.state.idDisabled} defaultValue={this.state.jvmId} placeholder="JVM Identifier" inputRef={(r) => this.jvmIdText = r}/></FormGroup>
            <FormGroup><FormControl type="text" label="Name" defaultValue={this.state.jvmName} placeholder="Display Name" inputRef={(r) => this.jvmNameText = r}/></FormGroup>
            <FormGroup><FormControl componentClass="select" label="Version" className="select2" defaultValue={this.state.versionValue} style={{width: '100%'}} inputRef={(r) => this.versionSelector = r}>
              <option value="1">Hotspot 1.2.2</option>
              <option value="2">Hotspot 1.3.1</option>
              <option value="3">Hotspot 1.4</option>
              <option value="4">Hotspot 1.5</option>
              <option value="5">Hotspot 1.6</option>
              <option value="6">Hotspot 1.7</option>
              <option value="7">Hotspot 1.8</option>
              <option value="8">Hotspot 1.9</option>
            </FormControl></FormGroup>
            <FormGroup><FormControl componentClass="select" label="Collector Type" defaultValue={this.state.collectorValue} className="select2" style={{width: '100%'}} inputRef={(r) => this.typeSelector = r}>
              <option value="1">Serial</option>
              <option value="2">Old GC</option>
              <option value="3">Parallel Old GC</option>
              <option value="4">Concurrent Mark Sweep (CMS)</option>
              <option value="5">Garbage One (G1)</option>
            </FormControl></FormGroup>
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
