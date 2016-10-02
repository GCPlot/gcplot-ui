'use strict';

import React from 'react';
import { Row, Col, Panel, Popover, Tooltip, Button, Modal, ProgressBar, Accordion, OverlayTrigger  } from 'react-bootstrap';
import I from 'react-fontawesome';

class UIGeneralPage extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  render() {
    let close = () => this.setState({ show: false});
    let popover = <Popover id="sample-popover" title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip id="sample-tooltip">wow.</Tooltip>;

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            General UI
            <small>Preview of UI elements</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">General</li>
          </ol>
        </section>

        <section className="content">
          <h2 className="page-header">Modal</h2>
          <Row>
            <Col md={12}>
              <Panel className="text-center">
                <Button
                  bsStyle="primary"
                  bsSize="large"
                  onClick={() => this.setState({ show: true})}
                >Launch Modal</Button>
              </Panel>

              <div className="static-modal">
                <Modal container={this} show={this.state.show} onHide={close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                    <h4>Popover in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

                    <h4>Tooltips in a modal</h4>
                    <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

                    <hr />

                    <h4>Overflowing text to show scroll behavior</h4>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Col>
          </Row>
          <h2 className="page-header">Alerts and Callouts</h2>
          <Row>
            <Col md={6}>
              <Panel Header={
                <span>
                  <I name="warning" /> Alerts
                </span>
              }>
                <div className="alert alert-danger alert-dismissable">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h4><i className="icon fa fa-ban"></i> Alert!</h4>
                  Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </div>
                <div className="alert alert-info alert-dismissable">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h4><i className="icon fa fa-info"></i> Alert!</h4>
                  Info alert preview. This alert is dismissable.
                </div>
                <div className="alert alert-warning alert-dismissable">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h4><i className="icon fa fa-warning"></i> Alert!</h4>
                  Warning alert preview. This alert is dismissable.
                </div>
                <div className="alert alert-success alert-dismissable">
                  <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h4>	<i className="icon fa fa-check"></i> Alert!</h4>
                  Success alert preview. This alert is dismissable.
                </div>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel Header={
                <span>
                  <I name="warning" /> Alerts
                </span>
              }>
                <div className="callout callout-danger">
                  <h4>I am a danger callout!</h4>
                  <p>There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                </div>
                <div className="callout callout-info">
                  <h4>I am an info callout!</h4>
                  <p>Follow the steps to continue to payment.</p>
                </div>
                <div className="callout callout-warning">
                  <h4>I am a warning callout!</h4>
                  <p>This is a yellow callout.</p>
                </div>
                <div className="callout callout-success">
                  <h4>I am a success callout!</h4>
                  <p>This is a green callout.</p>
                </div>
              </Panel>
            </Col>
          </Row>

          <h2 className="page-header">Progress Bars</h2>
          <Row>
            <Col md={6}>
              <Panel header="Progress Bars Different Sizes">
                <p><code>.progress</code></p>
                <ProgressBar now={40} bsStyle="info" striped />

                <p>Class: <code>.sm</code></p>
                <ProgressBar now={20} bsStyle="success" className="progress-sm" striped />
                <p>Class: <code>.xs</code></p>
                <ProgressBar now={80} bsStyle="warning" className="progress-xs" striped />
                <p>Class: <code>.xxs</code></p>
                <ProgressBar now={60} bsStyle="danger" className="progress-xxs" striped />
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header="Progress bars">
                <ProgressBar now={40} bsStyle="info" />
                <ProgressBar now={20} bsStyle="success" />
                <ProgressBar now={80} bsStyle="warning" />
                <ProgressBar now={60} bsStyle="danger" />
              </Panel>
            </Col>
          </Row>

          <h2 className="page-header">Bootstrap Accordions</h2>
          <Row>
            <Col md={6}>
              <Panel header="Collapsible Accordion">
                <Accordion>
                  <Panel header="Collapsible Group Item #1" eventKey="1">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                  <Panel header="Collapsible Group Item #2" eventKey="2">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                  <Panel header="Collapsible Group Item #3" eventKey="3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                </Accordion>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header="Collapsible Accordion">
                <Accordion>
                  <Panel header="Collapsible Group Item #1" bsStyle="success" eventKey="1">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                  <Panel header="Collapsible Group Item #2" bsStyle="danger" eventKey="2">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                  <Panel header="Collapsible Group Item #3" eventKey="3">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </Panel>
                </Accordion>
              </Panel>
            </Col>
          </Row>

          <h2 className="page-header">Typography</h2>
          <Row>
            <Col md={6}>
              <Panel header={<span><I name="text-width" /> Headlines</span>}>
                <h1>h1. Bootstrap heading</h1>
                <h2>h2. Bootstrap heading</h2>
                <h3>h3. Bootstrap heading</h3>
                <h4>h4. Bootstrap heading</h4>
                <h5>h5. Bootstrap heading</h5>
                <h6>h6. Bootstrap heading</h6>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header={<span><I name="text-width" /> Text Emphasis</span>}>
                <p className="lead">Lead to emphasize importance</p>
                <p className="text-green">Text green to emphasize success</p>
                <p className="text-aqua">Text aqua to emphasize info</p>
                <p className="text-light-blue">Text light blue to emphasize info (2)</p>
                <p className="text-red">Text red to emphasize danger</p>
                <p className="text-yellow">Text yellow to emphasize warning</p>
                <p className="text-muted">Text muted to emphasize general</p>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Panel header={<span><I name="text-width" /> Block Quotes</span>}>
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                </blockquote>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header={<span><I name="text-width" /> Block Quotes Pulled Right</span>}>
                <blockquote className="pull-right">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                </blockquote>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Panel header={<span><I name="text-width" /> Unordered List</span>}>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </Panel>
            </Col>

            <Col md={4}>
              <Panel header={<span><I name="text-width" /> Ordered List</span>}>
                <ol>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Nulla volutpat aliquam velit
                    <ol>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ol>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ol>
              </Panel>
            </Col>

            <Col md={4}>
              <Panel header={<span><I name="text-width" /> Unstyled List</span>}>
                <ul className="list-unstyled">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Panel header={<span><I name="text-width" /> Description</span>}>
                <dl>
                  <dt>Description lists</dt>
                  <dd>A description list is perfect for defining terms.</dd>
                  <dt>Euismod</dt>
                  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                  <dt>Malesuada porta</dt>
                  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                </dl>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header={<span><I name="text-width" /> Block Quotes Pulled Right</span>}>
                <dl className="dl-horizontal">
                  <dt>Description lists</dt>
                  <dd>A description list is perfect for defining terms.</dd>
                  <dt>Euismod</dt>
                  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                  <dt>Malesuada porta</dt>
                  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                  <dt>Felis euismod semper eget lacinia</dt>
                  <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
                </dl>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

UIGeneralPage.displayName = 'UIGeneralPage';

UIGeneralPage.defaultProps = {
};

export default UIGeneralPage;
