'use strict';

import React from 'react';
import { Row, Col, Panel, Table, Pagination, ProgressBar, Badge, Label } from 'react-bootstrap';

class TableSimplePage extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Simple Tables
            <small>preview of simple tables</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Tables</a></li>
            <li className="active">Simple</li>
          </ol>
        </section>

        <section className="content">
          <Row>
            <Col md={6}>
              <Panel
                header="Bordered Table"
                footer={
                  <Pagination
                    bsSize="small"
                    items={10} />
                }
                >
                <Table bordered>
                  <thead>
                    <tr>
                      <th style={{width: '10px'}}>#</th>
                      <th>Task</th>
                      <th>Progress</th>
                      <th style={{width: '40px'}}>Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <ProgressBar now={55} bsStyle="danger" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-red">55%</Badge></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <ProgressBar now={70} bsStyle="warning" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-yellow">70%</Badge></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <ProgressBar now={30} bsStyle="success" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-green">30%</Badge></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <ProgressBar now={90} bsStyle="primary" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-light-blue">90%</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </Panel>

              <Panel
                header="Condensed Table"
                footer={
                  <Pagination
                    bsSize="small"
                    items={10} />
                }
                >
                <Table condensed>
                  <thead>
                    <tr>
                      <th style={{width: '10px'}}>#</th>
                      <th>Task</th>
                      <th>Progress</th>
                      <th style={{width: '40px'}}>Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <ProgressBar now={55} bsStyle="danger" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-red">55%</Badge></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <ProgressBar now={70} bsStyle="warning" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-yellow">70%</Badge></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <ProgressBar now={30} bsStyle="success" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-green">30%</Badge></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <ProgressBar now={90} bsStyle="primary" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-light-blue">90%</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel
                header="Striped Table"
                footer={
                  <Pagination
                    bsSize="small"
                    items={10} />
                }
                >
                <Table striped>
                  <thead>
                    <tr>
                      <th style={{width: '10px'}}>#</th>
                      <th>Task</th>
                      <th>Progress</th>
                      <th style={{width: '40px'}}>Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <ProgressBar now={55} bsStyle="danger" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-red">55%</Badge></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <ProgressBar now={70} bsStyle="warning" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-yellow">70%</Badge></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <ProgressBar now={30} bsStyle="success" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-green">30%</Badge></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <ProgressBar now={90} bsStyle="primary" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-light-blue">90%</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </Panel>

              <Panel
                header="Hover Table"
                footer={
                  <Pagination
                    bsSize="small"
                    items={10} />
                }
                >
                <Table hover>
                  <thead>
                    <tr>
                      <th style={{width: '10px'}}>#</th>
                      <th>Task</th>
                      <th>Progress</th>
                      <th style={{width: '40px'}}>Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Update software</td>
                      <td>
                        <ProgressBar now={55} bsStyle="danger" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-red">55%</Badge></td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Clean database</td>
                      <td>
                        <ProgressBar now={70} bsStyle="warning" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-yellow">70%</Badge></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Cron job running</td>
                      <td>
                        <ProgressBar now={30} bsStyle="success" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-green">30%</Badge></td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Fix and squish bugs</td>
                      <td>
                        <ProgressBar now={90} bsStyle="primary" className="progress-xs" />
                      </td>
                      <td><Badge className="bg-light-blue">90%</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Panel header="Responsive Hover Table">
                <Table hover responsive>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reason</th>
                  </tr>
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td><Label bsStyle="success">Approved</Label></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>219</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td><Label bsStyle="warning">Pending</Label></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>657</td>
                    <td>Bob Doe</td>
                    <td>11-7-2014</td>
                    <td><Label bsStyle="primary">Approved</Label></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                  <tr>
                    <td>175</td>
                    <td>Mike Doe</td>
                    <td>11-7-2014</td>
                    <td><Label bsStyle="danger">Denied</Label></td>
                    <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                  </tr>
                </Table>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

TableSimplePage.displayName = 'TableSimplePage';

TableSimplePage.defaultProps = {
};

export default TableSimplePage;
