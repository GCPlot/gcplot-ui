'use strict';

import React from 'react';
import { Row, Col, Panel, Modal, Button, Popover, Tooltip, OverlayTrigger } from 'react-bootstrap';
import I from 'react-fontawesome';
import cn from 'classnames';

class UIModalsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  render() {
    let close = () => this.setState({ show: false});
    let popover = <Popover title="popover">very popover. such engagement</Popover>;
    let tooltip = <Tooltip>wow.</Tooltip>;

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Modals
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><I name="dashboard" /> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Modals</li>
          </ol>
        </section>

        <section className="content">
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={() => this.setState({ show: true})}
          >Launch contained modal</Button>
          <div className="static-modal">
            <Modal container={this} show={this.state.show}>
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
        </section>
      </div>
    );
  }
}

UIModalsPage.displayName = 'UIModalsPage';

UIModalsPage.defaultProps = {
};

export default UIModalsPage;
