'use strict';

import $ from 'jquery';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, InputGroup, FormControl, FormGroup, Modal, Button } from 'react-bootstrap';
import I from 'react-fontawesome';
import CreateJvm from '../components/Jvm/CreateJvm'
import GCPlotCore from '../core'
import TimezonePicker from '../tz_dist/react-bootstrap-timezone-picker.js';
import '../tz_dist/react-bootstrap-timezone-picker.min.css';

var uuid = require('uuid4');
var clipboard = require('clipboard-js');
var update = require('react-addons-update');

class AnalyseInfoPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        analyse: {
          name: "",
          source_type: "NONE",
          source_config: "",
          jvm_ids: [],
          jvm_vers: {},
          jvm_names: {},
          jvm_gcts: {},
          configs: {
            graphite_urls: "",
            graphite_prefix: "",
            graphite_proxy_type: 0,
            graphite_proxy_host: "",
            graphite_proxy_port: 0,
            graphite_proxy_username: "",
            graphite_proxy_password: ""
          }
        },
        updateDisabled: false,
        errorStyle: {
            display: "none",
            value: "",
            color: 'red'
        },
        updateCaption: "Update",
        gerror: {
          show: false,
          title: "",
          msg: ""
        },
        updateSourceCaption: "Update",
        updateSourceDisabled: false,
        updateSourceError: {
          display: "none",
          value: "",
          color: 'red'
        },
        updateConnectionCaption: "Update",
        updateConnectionDisabled: false,
        updateConnectionError: {
          display: "none",
          value: "",
          color: 'red'
        },
        sources: {
          s3: {
            bucket: "",
            accessKey: "",
            secretKey: "",
            region: "us-east-1",
            prefix: ""
          }
        },
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
    this.state.analyse.id = this.props.params.analyseId;
    this.setState(update(this.state, {
      analyse: {
        id: {$set: this.props.params.analyseId},
        name: {$set: ""},
        source_type: {$set: "NONE"},
        source_config: {$set: ""},
        jvm_ids: {$set: []},
        jvm_vers: {$set: {}},
        jvm_names: {$set: {}},
        jvm_gcts: {$set: {}}
      },
      sources: {
        s3: {
          bucket: {$set: ""},
          accessKey: {$set: ""},
          secretKey: {$set: ""},
          region: {$set: "us-east-1"},
          prefix: {$set: ""}
        }
      },
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
      for (var i = 0; i < analyses.length; i++) {
        if (analyses[i].id == this.props.params.analyseId) {
          if (analyses[i].source_type == "S3") {
            analyses[i].source_config.split(';').forEach((s) => {
              var ind = s.indexOf('=');
              if (ind != -1) {
                var key = s.substring(0, ind);
                var value = s.substring(ind + 1);

                if (key == "s3.bucket") {
                  this.state.sources.s3.bucket = value;
                } else if (key == "s3.access_key") {
                  this.state.sources.s3.accessKey = value;
                } else if (key == "s3.secret_key") {
                  this.state.sources.s3.secretKey = value;
                } else if (key == "s3.region.id") {
                  this.state.sources.s3.region = value;
                } else if (key == "s3.prefix") {
                  this.state.sources.s3.prefix = value;
                }
              }
            });
          }
          this.setState(update(this.state, {
            analyse: {$set: analyses[i]},
            initialJvmIds: {$set: analyses[i].jvm_ids}
          }));
          break;
        }
      }
    }).bind(this), function(code, title, msg) {
      this.setState(update(this.state, {
        gerror: {
          show: {$set: true},
          title: {$set: title},
          msg: {$set: msg}
        }
      }));
    }.bind(this));
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
      name: this.state.analyse.name,
      tz: this.tzPicker.prevValue
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
      GCPlotCore.history.push("/dashboard");
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
    var jvmsToAdd = [];
    for (var i = 0; i < this.state.jvmsAdded.length; i++) {
      var cmp = this.state.cmps[this.state.jvmsAdded[i]];
      jvmsToAdd.push({
        id: cmp.state.jvmId,
        an_id: "",
        name: cmp.jvmNameText.value,
        vm_ver: parseInt(cmp.versionSelector.value),
        gc_type: parseInt(cmp.typeSelector.value),
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
          jvm_id: cmp.state.jvmId,
          name: cmp.jvmNameText.value,
          vm_ver: parseInt(cmp.versionSelector.value),
          gc_type: parseInt(cmp.typeSelector.value),
        });
      }
    }
    var msg = {
      an_id: this.state.analyse.id,
      add_jvms: jvmsToAdd,
      remove_jvms: this.state.jvmsRemoved,
      update_jvms: jvmsToUpdate
    }
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
    var rstr = GCPlotCore.rstr(4);
    var newId = uuid();
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

  copyIdClick() {
    clipboard.copy(this.state.analyse.id);
  }

  onSourceSaveClick() {
    this.setState(update(this.state, {
      updateSourceError: {
        display: {$set: "none"},
        value: {$set: ""},
      },
      updateSourceDisabled: {$set: true},
      updateSourceCaption: {$set: "Updating ..."}
    }));

    GCPlotCore.updateAnalyzeSource({
      id: this.state.analyse.id,
      source_type: this.state.analyse.source_type,
      source_config: this.buildSourceConfig()
    }, () => {
      setTimeout(() => {
        this.setState(update(this.state, {
          updateSourceDisabled: {$set: false},
          updateSourceCaption: {$set: "Update"}
        }));
      }, 2000);
    }, (code, title, msg) => {
      this.setState(update(this.state, {
        updateSourceError: {
          display: {$set: "inline"},
          value: {$set: msg},
        },
        updateSourceDisabled: {$set: false},
        updateSourceCaption: {$set: "Update"}
      }));
    });
  }

  onConnectionSaveClick() {
    this.setState(update(this.state, {
      updateConnectionError: {
        display: {$set: "none"},
        value: {$set: ""},
      },
      updateConnectionDisabled: {$set: true},
      updateConnectionCaption: {$set: "Updating ..."}
    }));

    var configs = [];
    if (this.state.analyse.configs.graphite_prefix !== "" && typeof this.state.analyse.configs.graphite_prefix != undefined) {
      configs.push({
        prop_id: "2",
        value: this.state.analyse.configs.graphite_prefix
      });
    } else {
      configs.push({
        prop_id: "2",
        value: "${jvm_name}.gc."
      });
    }
    configs.push({
      prop_id: "1",
      value: this.state.analyse.configs.graphite_urls
    });

    GCPlotCore.updateAnalyzeConfig(this.state.analyse.id, {
      configs: configs
    }, () => {
      setTimeout(() => {
        this.setState(update(this.state, {
          updateConnectionDisabled: {$set: false},
          updateConnectionCaption: {$set: "Update"}
        }));
      }, 2000);
    }, (code, title, msg) => {
      this.setState(update(this.state, {
        updateConnectionError: {
          display: {$set: "inline"},
          value: {$set: msg},
        },
        updateConnectionDisabled: {$set: false},
        updateConnectionCaption: {$set: "Update"}
      }));
    });
  }

  buildSourceConfig() {
    var cfg = '';
    if (this.state.analyse.source_type == "S3") {
      cfg += 's3.bucket=' + this.state.sources.s3.bucket + ';';
      cfg += 's3.access_key=' + this.state.sources.s3.accessKey + ';';
      cfg += 's3.secret_key=' + this.state.sources.s3.secretKey + ';';
      cfg += 's3.region.id=' + this.state.sources.s3.region + ';';
      cfg += 's3.prefix=' + this.state.sources.s3.prefix;
    }
    return cfg;
  }

  render() {
    let gclose = () => this.setState(update(this.state, { gerror: { show: {$set: false} } }));
    let close = () => this.setState(update(this.state, { show: {$set: false}}));
    let closeSave = () => this.setState(update(this.state, { showSave: {$set: false}}));

    return (
      <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Analysis Group
          <small>{this.state.analyse.name}</small>
        </h1>
      </section>
        <section className="content">
        <Row>
        <Col md={12}>
          <div className="static-modal">
            <Modal container={this} show={this.state.gerror.show} onHide={gclose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.state.gerror.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{this.state.gerror.msg}</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={gclose}>OK</Button>
              </Modal.Footer>
            </Modal>
          </div>
          <Panel>
            <Tabs id="atabs" defaultActiveKey={1}>
              <Tab eventKey={1} title="Info">
                <Panel footer={<Button type="submit" onClick={this.onUpdateClick.bind(this)} disabled={this.state.updateDisabled} bsStyle="primary">{this.state.updateCaption}</Button>}>
                {(() => {
                  if (this.props.params.analyseId != GCPlotCore.ANONYMOUS_ANALYSE_ID) {
                    return <FormGroup>
                    <InputGroup>
                      <FormControl type="text" label="ID" value={this.state.analyse.id} disabled={true}/>
                      <InputGroup.Addon><I name="clipboard" style={{cursor: "pointer"}} onClick={this.copyIdClick.bind(this)} /></InputGroup.Addon>
                    </InputGroup></FormGroup>;
                  }
                })()}
                <FormGroup><FormControl type="text" label="Display Name" value={this.state.analyse.name} onChange={this.handleNameChange.bind(this)} placeholder="Enter name" inputRef={(r) => this.nameText = r} /></FormGroup>
                <label htmlFor="tzSelect">Timezone</label>
                <TimezonePicker
                  absolute      = {false}
                  value  = {this.state.analyse.tz || "Africa/Monrovia"}
                  placeholder   = "Timezone:"
                  id            = "tzSelect"
                  style         = {{width: "100%"}}
                  ref           = {(r) => this.tzPicker = r}
                />
                <p/>
                <p style={this.state.errorStyle}>{this.state.errorStyle.value}</p>
                <p/>
                <p/>
              </Panel>
              </Tab>
              {(() => {
                if (this.props.params.analyseId != GCPlotCore.ANONYMOUS_ANALYSE_ID) {
                  return <Tab eventKey={2} title="Data Source">
                    <Panel footer={<Button type="submit" disabled={this.state.updateSourceDisabled} onClick={this.onSourceSaveClick.bind(this)} bsStyle="primary">{this.state.updateSourceCaption}</Button>}>
                    <label htmlFor="sourceSelector">Source</label>
                    <FormGroup><FormControl componentClass="select" id="sourceSelector" label="Source" value={this.state.analyse.source_type} onChange={(e) => {this.setState(update(this.state, {analyse:{source_type:{$set:e.target.value}}}))}} className="select2" style={{width: '100%'}}>
                      <option value="NONE">Disabled</option>
                      <option value="INTERNAL">GCPlot Default</option>
                      <option value="S3">External S3 Storage</option>
                    </FormControl></FormGroup>
                    {(() => {
                      if (this.state.analyse.source_type == "S3") {
                        return <Panel>
                          <FormGroup><FormControl type="text" label="Bucket" value={this.state.sources.s3.bucket} onChange={(e) => {this.setState(update(this.state, {sources:{s3:{bucket:{$set:e.target.value}}}}))}} placeholder="Bucket Name"/></FormGroup>
                          <FormGroup><FormControl type="text" label="Access Key" value={this.state.sources.s3.accessKey} onChange={(e) => {this.setState(update(this.state, {sources:{s3:{accessKey:{$set:e.target.value}}}}))}} placeholder="Access Key"/></FormGroup>
                          <FormGroup><FormControl type="text" label="Secret Key" value={this.state.sources.s3.secretKey} onChange={(e) => {this.setState(update(this.state, {sources:{s3:{secretKey:{$set:e.target.value}}}}))}} placeholder="Secret Key"/></FormGroup>
                          <FormGroup><FormControl componentClass="select" id="regionSelector" label="Region" value={this.state.sources.s3.region} onChange={(e) => {this.setState(update(this.state, {sources:{s3:{region:{$set:e.target.value}}}}))}} className="select2" style={{width: '100%'}}>
                            <option value="us-east-1">US East (N. Virginia) - us-east-1</option>
                            <option value="us-east-2">US East (Ohio) - us-east-2</option>
                            <option value="us-west-1">US West (N. California) - us-west-1</option>
                            <option value="us-west-2">US West (Oregon) - us-west-2</option>
                            <option value="ca-central-1">Canada (Central) - ca-central-1</option>
                            <option value="ap-south-1">Asia Pacific (Mumbai) - ap-south-1</option>
                            <option value="ap-northeast-2">Asia Pacific (Seoul) - ap-northeast-2</option>
                            <option value="ap-southeast-1">Asia Pacific (Singapore) - ap-southeast-1</option>
                            <option value="ap-southeast-2">Asia Pacific (Sydney) - ap-southeast-2</option>
                            <option value="ap-northeast-1">Asia Pacific (Tokyo) - ap-northeast-1</option>
                            <option value="eu-central-1">EU (Frankfurt) - eu-central-1</option>
                            <option value="eu-west-1">EU (Ireland) - eu-west-1</option>
                            <option value="eu-west-2">EU (London) - eu-west-2</option>
                            <option value="sa-east-1">South America (São Paulo) - sa-east-1</option>
                          </FormControl></FormGroup>
                          <FormGroup><FormControl type="text" label="Path Prefix (Optional)" value={this.state.sources.s3.prefix} onChange={(e) => {this.setState(update(this.state, {sources:{s3:{prefix:{$set:e.target.value}}}}))}} placeholder="Path Prefix (Optional)"/></FormGroup>
                        </Panel>;
                      }
                    })()}
                    <p style={this.state.updateSourceError}>{this.state.updateSourceError.value}</p>
                  </Panel>
                  </Tab>;
                }
              })()}
              {(() => {
                if (this.props.params.analyseId != GCPlotCore.ANONYMOUS_ANALYSE_ID) {
                  return <Tab eventKey={3} title="Connections">
                      <Panel footer={<Button type="submit" disabled={this.state.updateConnectionDisabled} onClick={this.onConnectionSaveClick.bind(this)} bsStyle="primary">{this.state.updateConnectionCaption}</Button>}>
                        <h4>Graphite Integration</h4>
                        <hr/>
                        <label htmlFor="graphUrls">Graphite URLs</label>
                        <FormGroup><FormControl type="text" id="graphUrls" value={this.state.analyse.configs.graphite_urls} onChange={(e) => {this.setState(update(this.state, {analyse:{configs:{graphite_urls:{$set:e.target.value}}}}))}} placeholder="Comma-separated hosts, for example graphite.com:2003"/></FormGroup>
                        <label htmlFor="graphPrefix">Graphite Prefix</label>
                        <p>{'Graphite canonical dot-separated path. You can use ${jvm_name} variable to distinguish different JVMs.'}</p>
                        <p>Leave empty for the default value to be applied.</p>
                        <FormGroup><FormControl id="graphPrefix" type="text" value={this.state.analyse.configs.graphite_prefix === "${jvm_name}.gc." ? "" : this.state.analyse.configs.graphite_prefix} onChange={(e) => {this.setState(update(this.state, {analyse:{configs:{graphite_prefix:{$set:e.target.value}}}}))}} placeholder="${jvm_name}.gc."/></FormGroup>
                      </Panel>
                    </Tab>
                }
              })()}
              {(() => {
                if (this.props.params.analyseId != GCPlotCore.ANONYMOUS_ANALYSE_ID) {
                return <Tab eventKey={4} title="Manage">
                <Panel header="Danger Zone">
                <form role="form">
                   <Button className="btn btn-block btn-danger" style={{color: "white"}} onClick={() => this.setState(update(this.state, { show: {$set: true}}))}>Delete Analysis Group</Button>
                </form>
                <div className="static-modal">
                  <Modal container={this} show={this.state.show} onHide={close}>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete "{this.state.analyse.name}"</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h4>Are you sure you want to delete this Analysis Group?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button bsStyle="danger" onClick={this.onDeleteClick.bind(this)}>Delete</Button>
                      <Button onClick={close}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                </Panel>
              </Tab>;
              }
              })()}
              {(() => {
                if (this.props.params.analyseId != GCPlotCore.ANONYMOUS_ANALYSE_ID) {
                  return <Tab eventKey={5} title="JVMs">
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
                           return <CreateJvm md={3} cid={r} key={r} pp={this} title="JVM" versionValue={this.state.analyse.jvm_vers[r]}
                           collectorValue={this.state.analyse.jvm_gcts[r]} jvmName={this.state.analyse.jvm_names[r] || r} jvmId={r} closeClickHandler={this.jvmCloseClicked.bind(this,
                             r)}></CreateJvm>;
                       }.bind(this));
                     }.bind(this))()}
                     </Row>
                  </Tab>;
                }
                })()}
            </Tabs>
          </Panel>
        </Col>
        </Row>
        </section>
      </div>);
  }

}

AnalyseInfoPage.displayName = 'AnalyseInfoPage';

AnalyseInfoPage.defaultProps = {
};

export default AnalyseInfoPage;
