'use strict';

import React from 'react';
import { Row, Col, Panel, Table, ButtonGroup, Button, ButtonToolbar, DropdownButton, SplitButton, MenuItem } from 'react-bootstrap';
import I from 'react-fontawesome';
import cn from 'classnames';

class UIButtonsPage extends React.Component {
  render() {
    const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

    function renderDropdownButton(title, i) {
      return (
        <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3" active>Active Item</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      );
    }

    function renderSplitDropdownButton(title, i) {
      return (
        <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </SplitButton>
      );
    }

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Buttons
            <small>Control panel</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><I name="dashboard" /> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Buttons</li>
          </ol>
        </section>

        <section className="content">
          <Row>
            <Col md={12}>
              <Panel header="buttons">
                <p>Various types of buttons. Using the base class <code>.btn</code></p>
                <Table className="text-center" bordered>
                  <tr>
                    <th>Normal</th>
                    <th>Large <code>.btn-lg</code></th>
                    <th>Small <code>.btn-sm</code></th>
                    <th>X-Small <code>.btn-xs</code></th>
                    <th>Flat <code>.btn-flat</code></th>
                    <th>Disabled <code>.disabled</code></th>
                  </tr>
                  <tr>
                    <td><button className="btn btn-block btn-default">Default</button></td>
                    <td><button className="btn btn-block btn-default btn-lg">Default</button></td>
                    <td><button className="btn btn-block btn-default btn-sm">Default</button></td>
                    <td><button className="btn btn-block btn-default btn-xs">Default</button></td>
                    <td><button className="btn btn-block btn-default btn-flat">Default</button></td>
                    <td><button className="btn btn-block btn-default disabled">Default</button></td>
                  </tr>
                  <tr>
                    <td><button className="btn btn-block btn-primary">Primary</button></td>
                    <td><button className="btn btn-block btn-primary btn-lg">Primary</button></td>
                    <td><button className="btn btn-block btn-primary btn-sm">Primary</button></td>
                    <td><button className="btn btn-block btn-primary btn-xs">Primary</button></td>
                    <td><button className="btn btn-block btn-primary btn-flat">Primary</button></td>
                    <td><button className="btn btn-block btn-primary disabled">Primary</button></td>
                  </tr>
                  <tr>
                    <td><button className="btn btn-block btn-success">Success</button></td>
                    <td><button className="btn btn-block btn-success btn-lg">Success</button></td>
                    <td><button className="btn btn-block btn-success btn-sm">Success</button></td>
                    <td><button className="btn btn-block btn-success btn-xs">Success</button></td>
                    <td><button className="btn btn-block btn-success btn-flat">Success</button></td>
                    <td><button className="btn btn-block btn-success disabled">Success</button></td>
                  </tr>
                  <tr>
                    <td><button className="btn btn-block btn-info">Info</button></td>
                    <td><button className="btn btn-block btn-info btn-lg">Info</button></td>
                    <td><button className="btn btn-block btn-info btn-sm">Info</button></td>
                    <td><button className="btn btn-block btn-info btn-xs">Info</button></td>
                    <td><button className="btn btn-block btn-info btn-flat">Info</button></td>
                    <td><button className="btn btn-block btn-info disabled">Info</button></td>
                  </tr>
                  <tr>
                    <td><button className="btn btn-block btn-danger">Danger</button></td>
                    <td><button className="btn btn-block btn-danger btn-lg">Danger</button></td>
                    <td><button className="btn btn-block btn-danger btn-sm">Danger</button></td>
                    <td><button className="btn btn-block btn-danger btn-xs">Danger</button></td>
                    <td><button className="btn btn-block btn-danger btn-flat">Danger</button></td>
                    <td><button className="btn btn-block btn-danger disabled">Danger</button></td>
                  </tr>
                  <tr>
                    <td><button className="btn btn-block btn-warning">Warning</button></td>
                    <td><button className="btn btn-block btn-warning btn-lg">Warning</button></td>
                    <td><button className="btn btn-block btn-warning btn-sm">Warning</button></td>
                    <td><button className="btn btn-block btn-warning btn-xs">Warning</button></td>
                    <td><button className="btn btn-block btn-warning btn-flat">Warning</button></td>
                    <td><button className="btn btn-block btn-warning disabled">Warning</button></td>
                  </tr>
                </Table>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Panel header="Block Buttons">
                <Button bsStyle="default" bsSize="lg" block>.btn-block</Button>
                <Button bsStyle="default" block>.btn-block</Button>
                <Button bsStyle="default" bsSize="sm" block>.btn-block</Button>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header="Block Buttons Colored">
                <ButtonGroup vertical block>
                  <Button bsStyle="danger">Full width button</Button>
                  <Button bsStyle="primary">Full width button</Button>
                  <Button bsStyle="warning">Full width button</Button>
                </ButtonGroup>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Panel header="Horizontal Button Group">
                <Row>
                  <Col md={3}>
                    <ButtonGroup>
                      <Button>Left</Button>
                      <Button>Middle</Button>
                      <Button>Right</Button>
                    </ButtonGroup>
                  </Col>

                  <Col md={3}>
                    <ButtonGroup>
                      <Button bsStyle="primary">Left</Button>
                      <Button bsStyle="primary">Middle</Button>
                      <Button bsStyle="primary">Right</Button>
                    </ButtonGroup>
                  </Col>

                  <Col md={3}>
                    <ButtonGroup>
                      <Button bsStyle="success">Left</Button>
                      <Button bsStyle="success">Middle</Button>
                      <Button bsStyle="success">Right</Button>
                    </ButtonGroup>
                  </Col>

                  <Col md={3}>
                    <ButtonGroup>
                      <Button bsStyle="danger">Left</Button>
                      <Button bsStyle="danger">Middle</Button>
                      <Button bsStyle="danger">Right</Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Panel header="Button Toolbar">
                <ButtonToolbar>
                  <ButtonGroup>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                  </ButtonGroup>

                  <ButtonGroup>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button>7</Button>
                  </ButtonGroup>

                  <ButtonGroup>
                    <Button>8</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header="Justified button groups">
                <ButtonGroup justified>
                  <Button bsStyle="primary" href="#">Left</Button>
                  <Button bsStyle="danger" href="#">Middle</Button>
                  <Button bsStyle="warning" href="#">Right</Button>
                </ButtonGroup>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Panel header="Dropdown Buttons">
                <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header="Split Dropdown Buttons">
                <ButtonToolbar>{BUTTONS.map(renderSplitDropdownButton)}</ButtonToolbar>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Panel header="Social Buttons">
                {
                  ['bitbucket', 'dropbox', 'facebook', 'flickr', 'foursquare', 'github', 'google', 'instagram', 'linkedin', 'tumblr', 'twitter', 'vk']
                    .map((item, i) => {
                      return (
                        <Button key={i} className={cn({
                            'btn-social': true,
                            [`btn-${item}`]: true
                          })} block>
                          <I name={item} /> Sign in with {item}
                        </Button>
                      )
                    })
                }

                <br />

                <div className="text-center">
                  {
                    ['bitbucket', 'dropbox', 'facebook', 'flickr', 'foursquare', 'github', 'google', 'instagram', 'linkedin', 'tumblr', 'twitter', 'vk']
                      .map((item, i) => {
                        return (
                          <Button key={i} className={cn({
                              'btn-social-icon': true,
                              [`btn-${item}`]: true
                            })}>
                            <I name={item} />
                          </Button>
                        )
                      })
                  }
                </div>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header="Application Buttons">
                <p>Add the classes <code>.btn.btn-app</code> to an <code>&lt;a></code> tag to achieve the following:</p>
                <a className="btn btn-app">
                  <I name="edit" /> Edit
                </a>
                <a className="btn btn-app">
                  <I name="fa fa-play" /> Play
                </a>
                <a className="btn btn-app">
                  <I name="fa fa-repeat" /> Repeat
                </a>
                <a className="btn btn-app">
                  <I name="fa fa-pause" /> Pause
                </a>
                <a className="btn btn-app">
                  <I name="fa fa-save" /> Save
                </a>
                <a className="btn btn-app">
                  <span className="badge bg-yellow">3</span>
                  <I name="fa fa-bullhorn" /> Notifications
                </a>
                <a className="btn btn-app">
                  <span className="badge bg-green">300</span>
                  <I name="fa fa-barcode" /> Products
                </a>
                <a className="btn btn-app">
                  <span className="badge bg-purple">891</span>
                  <I name="fa fa-users" /> Users
                </a>
                <a className="btn btn-app">
                  <span className="badge bg-teal">67</span>
                  <I name="fa fa-inbox" /> Orders
                </a>
                <a className="btn btn-app">
                  <span className="badge bg-aqua">12</span>
                  <I name="fa fa-envelope" /> Inbox
                </a>
                <a className="btn btn-app">
                  <span className="badge bg-red">531</span>
                  <I name="fa fa-heart-o" /> Likes
                </a>
              </Panel>

              <Panel header="Vertical Button Group">
                <p>
                  Vertical button groups are easy to create with bootstrap. Just add your buttons
                  inside <code>&lt;div class="btn-group-vertical"&gt;&lt;/div&gt;</code>
                </p>

                <Table bordered>
                  <tr>
                    <th>Button</th>
                    <th>Icons</th>
                    <th>Flat</th>
                    <th>Dropdown</th>
                  </tr>

                  <tr>
                    <td>
                      <ButtonGroup vertical>
                        <Button>Top</Button>
                        <Button>Middle</Button>
                        <Button>Bottom</Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button><I name="align-left" /></Button>
                        <Button><I name="align-center" /></Button>
                        <Button><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button className="btn-flat"><I name="align-left" /></Button>
                        <Button className="btn-flat"><I name="align-center" /></Button>
                        <Button className="btn-flat"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button>1</Button>
                        <Button>2</Button>
                        <DropdownButton>
                          <MenuItem eventKey="1">Dropdown link</MenuItem>
                          <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                      </ButtonGroup>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="info">Top</Button>
                        <Button bsStyle="info">Middle</Button>
                        <Button bsStyle="info">Bottom</Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="info"><I name="align-left" /></Button>
                        <Button bsStyle="info"><I name="align-center" /></Button>
                        <Button bsStyle="info"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="info" className="btn-flat"><I name="align-left" /></Button>
                        <Button bsStyle="info" className="btn-flat"><I name="align-center" /></Button>
                        <Button bsStyle="info" className="btn-flat"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="info">1</Button>
                        <Button bsStyle="info">2</Button>
                        <DropdownButton bsStyle="info">
                          <MenuItem eventKey="1">Dropdown link</MenuItem>
                          <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                      </ButtonGroup>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="danger">Top</Button>
                        <Button bsStyle="danger">Middle</Button>
                        <Button bsStyle="danger">Bottom</Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="danger"><I name="align-left" /></Button>
                        <Button bsStyle="danger"><I name="align-center" /></Button>
                        <Button bsStyle="danger"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="danger" className="btn-flat"><I name="align-left" /></Button>
                        <Button bsStyle="danger" className="btn-flat"><I name="align-center" /></Button>
                        <Button bsStyle="danger" className="btn-flat"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="danger">1</Button>
                        <Button bsStyle="danger">2</Button>
                        <DropdownButton bsStyle="danger">
                          <MenuItem eventKey="1">Dropdown link</MenuItem>
                          <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                      </ButtonGroup>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="warning">Top</Button>
                        <Button bsStyle="warning">Middle</Button>
                        <Button bsStyle="warning">Bottom</Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="warning"><I name="align-left" /></Button>
                        <Button bsStyle="warning"><I name="align-center" /></Button>
                        <Button bsStyle="warning"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="warning" className="btn-flat"><I name="align-left" /></Button>
                        <Button bsStyle="warning" className="btn-flat"><I name="align-center" /></Button>
                        <Button bsStyle="warning" className="btn-flat"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="warning">1</Button>
                        <Button bsStyle="warning">2</Button>
                        <DropdownButton bsStyle="warning">
                          <MenuItem eventKey="1">Dropdown link</MenuItem>
                          <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                      </ButtonGroup>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="success">Top</Button>
                        <Button bsStyle="success">Middle</Button>
                        <Button bsStyle="success">Bottom</Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="success"><I name="align-left" /></Button>
                        <Button bsStyle="success"><I name="align-center" /></Button>
                        <Button bsStyle="success"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="success" className="btn-flat"><I name="align-left" /></Button>
                        <Button bsStyle="success" className="btn-flat"><I name="align-center" /></Button>
                        <Button bsStyle="success" className="btn-flat"><I name="align-right" /></Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      <ButtonGroup vertical>
                        <Button bsStyle="success">1</Button>
                        <Button bsStyle="success">2</Button>
                        <DropdownButton bsStyle="success">
                          <MenuItem eventKey="1">Dropdown link</MenuItem>
                          <MenuItem eventKey="2">Dropdown link</MenuItem>
                        </DropdownButton>
                      </ButtonGroup>
                    </td>
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

UIButtonsPage.displayName = 'UIButtonsPage';

UIButtonsPage.defaultProps = {
};

export default UIButtonsPage;
