'use strict';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, Input, Modal, ButtonInput, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import GCPlotCore from '../core'

var update = require('react-addons-update');

class AnalyseInfoPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        analyse: {
          name: ""
        },
        updateDisabled: false,
        errorStyle: {
            display: "none",
            value: "",
            color: 'red'
        },
        updateCaption: "Update",
        show: false
      };
  }

  componentDidUpdate() {
    if (this.state.analyse.id != this.props.params.analyseId) {
      this.componentWillMount();
    }
  }

  componentWillMount() {
    GCPlotCore.analyses((function(r) {
      var analyses = r.analyses;
      for (var i = 0; i < analyses.length; i++) {
        if (analyses[i].id == this.props.params.analyseId) {
          this.setState(update(this.state, {
            analyse: {$set: analyses[i]}
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

  render() {
    let close = () => this.setState(update(this.state, { show: {$set: false}}));

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
        <Col md={8}>
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
