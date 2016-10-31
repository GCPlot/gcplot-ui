'use strict';

import $ from 'jquery';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, Input, Modal, ButtonInput, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import I from 'react-fontawesome';
import CreateJvm from '../components/Jvm/CreateJvm'
import GCPlotCore from '../core'

var update = require('react-addons-update');

class AnalyseInfoPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        analyse: {
          name: "",
          jvm_ids: [],
          jvm_vers: {},
          jvm_names: {},
          jvm_gcts: {}
        },
        updateDisabled: false,
        errorStyle: {
            display: "none",
            value: "",
            color: 'red'
        },
        updateCaption: "Update",
        show: false,
        showSave: false,
        cmps: {},
        initialJvmIds: [],
        jvmsAdded: [],
        jvmsRemoved: [],
        save: {
          message: ""
        }
      };
  }

  componentDidUpdate() {
    if (this.state.analyse.id != this.props.params.analyseId) {
      this.updateAll();
    }
  }

  updateAll() {
    this.setState(update(this.state, {
      jvmsAdded: {$set: []},
      jvmsRemoved: {$set: []},
      /*cmps: {$set: {}},
      initialJvmIds: {$set: []},*/
      save: {
        message: {$set: ""}
      }
    }));
    this.componentWillMount();
  }

  componentWillMount() {
    GCPlotCore.analyses((function(r) {
      var analyses = r.analyses;
      console.log(analyses);
      for (var i = 0; i < analyses.length; i++) {
        if (analyses[i].id == this.props.params.analyseId) {
          this.setState(update(this.state, {
            analyse: {$set: analyses[i]},
            initialJvmIds: {$set: analyses[i].jvm_ids}
          }));
          break;
        }
      }
    }).bind(this), function(code, title, msg) {
      alert(code + "|" + title + "|" + msg);
    });
  }

  handleNameChange(event) {
    this.setState(update(this.state, {
      analyse: {
        name: {$set: event.target.value}
      }
    }));
  }

  onUpdateClick() {
    var msg = {
      id: this.state.analyse.id,
      name: this.state.analyse.name
    }
    this.setState(update(this.state, {
      updateDisabled: {$set: true},
      errorStyle: {
          display: {$set: "none"},
          value: {$set: ""}
      },
      updateCaption: {$set: "Updating..."}
    }));
    GCPlotCore.updateAnalyse(msg, function() {
      setTimeout(function() {
        this.setState(update(this.state, {
          updateDisabled: {$set: false},
          updateCaption: {$set: "Update"}
        }));
      }.bind(this), 2000);
    }.bind(this), function(code, title, msg) {
      this.setState(update(this.state, {
        errorStyle: {
            display: {$set: "block"},
            value: {$set: title + " (" + msg + ")"}
        },
        updateCaption: {$set: "Update"}
      }));
    }.bind(this));
  }

  onDeleteClick() {
    GCPlotCore.deleteAnalyse(this.props.params.analyseId, function() {
      this.setState(update(this.state, { show: {$set: false}}))
      browserHistory.push("/dashboard");
    }.bind(this), function(code, title, msg) {
      this.setState(update(this.state, {
        errorStyle: {
            display: {$set: "block"},
            value: {$set: title + " (" + msg + ")"}
        },
        updateCaption: {$set: "Update"},
        show: {$set: false}
      }));
    }.bind(this));
  }

  onSaveClick() {
    console.log(this.state);
    var jvmsToAdd = [];
    for (var i = 0; i < this.state.jvmsAdded.length; i++) {
      var cmp = this.state.cmps[this.state.jvmsAdded[i]];
      jvmsToAdd.push({
        id: cmp.jvmIdText.getValue(),
        an_id: "",
        name: cmp.jvmNameText.getValue(),
        vm_ver: parseInt(cmp.versionSelector.getValue()),
        gc_type: parseInt(cmp.typeSelector.getValue()),
        headers: ""
      });
    }
    var jvmsToUpdate = [];
    for (var i = 0; i < this.state.analyse.jvm_ids.length; i++) {
      var jvm = this.state.analyse.jvm_ids[i];
      var cmp = this.state.cmps[jvm];
      if ($.inArray(jvm, this.state.jvmsAdded) < 0 && $.inArray(jvm, this.state.jvmsRemoved) < 0) {
        jvmsToUpdate.push({
          an_id: "",
          jvm_id: cmp.jvmIdText.getValue(),
          name: cmp.jvmNameText.getValue(),
          vm_ver: parseInt(cmp.versionSelector.getValue()),
          gc_type: parseInt(cmp.typeSelector.getValue()),
        });
      }
    }
    var msg = {
      an_id: this.state.analyse.id,
      add_jvms: jvmsToAdd,
      remove_jvms: this.state.jvmsRemoved,
      update_jvms: jvmsToUpdate
    }
    console.log(JSON.stringify(msg));
    GCPlotCore.updateAnalyseBulk(msg, function() {
      this.setState(update(this.state, { showSave: {$set: false}, save: { message: {$set: ""}}}));
      this.updateAll();
    }.bind(this), function(code, title, msg) {
      this.setState(update(this.state, { save: { message: {$set: title + " (" + msg + ")"}}}));
    }.bind(this));
  }

  jvmCloseClicked(cid) {
    if ($.inArray(cid, this.state.analyse.jvm_ids) >= 0) {
      var jvmIds = this.state.analyse.jvm_ids.slice();
      jvmIds.splice($.inArray(cid, jvmIds), 1);
      var delta = {
        analyse: {
          jvm_ids: {$set: jvmIds}
        }
      };
      if ($.inArray(cid, this.state.jvmsAdded) < 0) {
        delta["jvmsRemoved"] = {$push: [cid]};
      } else {
        var jvmsAdded = this.state.jvmsAdded.slice();
        jvmsAdded.splice($.inArray(cid, jvmsAdded), 1);
        delta["jvmsAdded"] = {$set: jvmsAdded};
      }
      this.setState(update(this.state, delta));
    }
  }

  resetClicked() {
    this.setState(update(this.state, {
      analyse: {
        jvm_ids: {$set: this.state.initialJvmIds}
      },
      jvmsAdded: {$set: []},
      jvmsRemoved: {$set: []}
    }));
  }

  addJvmClicked() {
    var rstr = GCPlotCore.rstr(7);
    var newId = "vm-" + rstr; // TODO move to utils with uniqueness checks
    var newVer = {};
    var newCol = {};
    var newName = {};
    newVer[newId] = "7";
    newCol[newId] = "3";
    newName[newId] = "VM " + rstr;
    this.setState(update(this.state, {
      analyse: {
        jvm_ids: {$push: [newId]},
        jvm_vers: {$merge: newVer},
        jvm_gcts: {$merge: newCol},
        jvm_names: {$merge: newName}
      },
      jvmsAdded: {$push: [newId]}
    }));
  }

  render() {
    let close = () => this.setState(update(this.state, { show: {$set: false}}));
    let closeSave = () => this.setState(update(this.state, { showSave: {$set: false}}));

    if (this.props.params.analyseId != GCPlotCore.ANONYMOUS_ANALYSE_ID) {
    return (
      <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Analyse Info
          <small>{this.state.analyse.name}</small>
        </h1>
      </section>
        <section className="content">
        <Row>
        <Col md={12}>
          <Panel>
            <Tabs defaultActiveKey={1}>
              <Tab eventKey={1} title="Info">
                <Input type="text" label="ID" value={this.state.analyse.id} disabled={true}/>
                <Input type="text" label="Display Name" value={this.state.analyse.name} onChange={this.handleNameChange.bind(this)} placeholder="Enter name" ref={(r) => this.nameText = r} />
                <p/>
                <p style={this.state.errorStyle}>{this.state.errorStyle.value}</p>
                <button className="btn btn-block btn-primary" onClick={this.onUpdateClick.bind(this)} disabled={this.state.updateDisabled}>{this.state.updateCaption}</button>
                <p/>
                <p/>
              </Tab>
              <Tab eventKey={2} title="Manage">
              <Panel header="Danger Zone">
              <form role="form">
                 <Button className="btn btn-block btn-danger" style={{color: "white"}} onClick={() => this.setState(update(this.state, { show: {$set: true}}))}>Delete Analyse</Button>
              </form>
              <div className="static-modal">
                <Modal container={this} show={this.state.show} onHide={close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete "{this.state.analyse.name}"</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Are you sure you want to delete this analyse?</h4>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button bsStyle="danger" onClick={this.onDeleteClick.bind(this)}>Delete</Button>
                    <Button onClick={close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
              </Panel>
              </Tab>
              <Tab eventKey={3} title="JVMs">
              <div className="static-modal">
                <Modal container={this} show={this.state.showSave} onHide={closeSave}>
                  <Modal.Header closeButton>
                    <Modal.Title>Confirm update</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Are you sure you want to save the changes?</h4>
                    <p>{this.state.save.message}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button bsStyle="danger" onClick={this.onSaveClick.bind(this)}>Save</Button>
                    <Button onClick={closeSave}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <Row>
              <Col md={2}>
              <ButtonGroup>
                <Button bsStyle="success" onClick={this.addJvmClicked.bind(this)}>Add</Button>
                <Button bsStyle="primary" onClick={this.resetClicked.bind(this)}>Reset</Button>
              </ButtonGroup>
              </Col>
              <Col>
              <Button bsStyle="danger" onClick={() => this.setState(update(this.state, { showSave: {$set: true}}))}>Save changes</Button>
              </Col>
              </Row>
              <p/>
                 <Row>
                   {(function() {
                     return this.state.analyse.jvm_ids.map(function(r, i) {
                       console.log(r + "|" + ($.inArray(r, this.state.initialJvmIds) >= 0));
                       return <CreateJvm md={3} cid={r} key={r} pp={this} title="JVM" versionValue={this.state.analyse.jvm_vers[r]}
                       collectorValue={this.state.analyse.jvm_gcts[r]} jvmName={this.state.analyse.jvm_names[r] || r} jvmId={r}
                       idDisabled={$.inArray(r, this.state.initialJvmIds) >= 0} closeClickHandler={this.jvmCloseClicked.bind(this,
                         r)}></CreateJvm>;
                   }.bind(this));
                 }.bind(this))()}
                 </Row>
              </Tab>
            </Tabs>
          </Panel>
        </Col>
        </Row>
        </section>
      </div>);
    } else {
      return <div/>
    }
  }

}

AnalyseInfoPage.displayName = 'AnalyseInfoPage';

AnalyseInfoPage.defaultProps = {
};

export default AnalyseInfoPage;
