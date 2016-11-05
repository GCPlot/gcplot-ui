'use strict';

import React from 'react';
import { browserHistory } from 'react-router'
import { Row, Col, Panel, Input, ButtonInput, Popover, Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import I from 'react-fontawesome';
import CreateJvm from '../components/Jvm/CreateJvm'
import GCPlotCore from '../core'
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

var update = require('react-addons-update');

class NewAnalysePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        jvms: [],
        lastId: 0,
        cmps: {},
        errorStyle: {
            display: "none",
            value: "",
            color: 'red'
        },
        createDisabled: false
      };
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  addJvmClicked(e) {
    var newId = this.state.lastId + 1;
    var newElement = <CreateJvm md={3} cid={newId} key={newId} pp={this} closeClickHandler={this.jvmCloseClicked.bind(this, newId)}></CreateJvm>;
    this.setState(update(this.state, {
      jvms: { $push: [newElement] },
      lastId: { $set: newId }
    }));
    e.preventDefault();
  }

  jvmCloseClicked(cid) {
    var jvms = [];
    for (var i = 0; i < this.state.jvms.length; i++) {
      if (this.state.jvms[i].props.cid != cid) {
        jvms.push(this.state.jvms[i]);
      }
    }
    this.setState(update(this.state, {
      jvms: { $set: jvms }
    }));
  }

  createClicked() {
    if (this.nameText.getValue().length == 0) {
      this.setState(update(this.state, {
        errorStyle: {
            display: {$set: "block"},
            value: {$set: "Name should not be empty!"},
            createDisabled: {$set: false}
        }
      }));
    } else {
      this.setState(update(this.state, {
        createDisabled: {$set: true}
      }));
      var req = {
        name: this.nameText.getValue(),
        cnts: true,
        tz: this.tzPicker.prevValue,
        ext: ""
      };
      var jvms = [];
      for (var i = 0; i < this.state.jvms.length; i++) {
        var jvm = this.state.cmps[this.state.jvms[i].props.cid + ""];
        console.log(jvm);
        jvms.push({
          id: jvm.jvmIdText.getValue(),
          an_id: "",
          name: jvm.jvmNameText.getValue(),
          vm_ver: parseInt(jvm.versionSelector.getValue()),
          gc_type: parseInt(jvm.typeSelector.getValue()),
          headers: ""
        });
      }
      req["jvms"] = jvms;
      GCPlotCore.addAnalyse(req, function() {
        browserHistory.push("/dashboard");
      }, (function(code, title, msg) {
        this.setState(update(this.state, {
          errorStyle: {
              display: {$set: "block"},
              value: {$set: title + " (" + msg + ")"},
              createDisabled: {$set: false}
          }
        }));
      }).bind(this));
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            GC Analyse
            </h1>
      </section>
      <section className="content">
      <Row style={{padding: "5px"}}>
        <Col>
        <Panel header="Create New" footer={<div>
          <p style={this.state.errorStyle}>{this.state.errorStyle.value}</p>
          <Button type="button" disabled={this.state.createDisabled} bsStyle="primary" onClick={this.createClicked.bind(this)}>Create</Button>
        </div>}>
          <form role="form">
            <Input type="text" label="Display Name" placeholder="Enter name" ref={(r) => this.nameText = r} />
            <label htmlFor="tzSelect">Timezone</label>
            <p>
            <TimezonePicker
              absolute      = {false}
              defaultValue  = "Europe/London"
              placeholder   = "Timezone:"
              id            = "tzSelect"
              style         = {{width: "100%"}}
              ref           = {(r) => this.tzPicker = r}
            />
            </p>
            <button className="btn btn-block btn-info btn-xs" style={{width: "100px"}} onClick={this.addJvmClicked.bind(this)}>Add JVM</button>
            <p />
          </form>
          <Row ref={(r) => this.jvmsRow = r}>
          { this.state.jvms }
          </Row>
        </Panel>
        </Col>
        </Row>
        </section>
      </div>
    );
  }
}

NewAnalysePage.displayName = 'NewAnalysePage';

NewAnalysePage.defaultProps = {
};

export default NewAnalysePage;
