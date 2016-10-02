'use strict';

import React from 'react';
import { Row, Col, Panel, Input, ButtonInput, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import I from 'react-fontawesome';

class FormGeneralPage extends React.Component {

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            General Form Elements
            <small>Control panel</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li className="active">General Elements</li>
          </ol>
        </section>

        <section className="content">
          <Row>
            <Col md={6}>
              <Panel header="Quick Example" footer={<ButtonInput type="submit" bsStyle="primary" value="Submit Button" />}>
                <form role="form">
                  <Input type="email" label="Email address" placeholder="Enter email" />
                  <Input type="password" label="Password" placeholder="Password" />
                  <Input type="file" label="File Input" />
                  <Input type="checkbox" label="Check me out" checked />
                </form>
              </Panel>

              <Panel header="Different Height">
                <Input type="text" bsSize="large" placeholder=".input-lg" />
                <br />
                <Input type="text" bsSize="medium" placeholder="Default input" />
                <br />
                <Input type="text" bsSize="small" placeholder=".input-sm" />
              </Panel>

              <Panel header="Different Width">
                <Row>
                  <Col xs={3}>
                    <Input type="text" placeholder=".col-xs-3" standalone />
                  </Col>
                  <Col xs={4}>
                    <Input type="text" placeholder=".col-xs-4" standalone />
                  </Col>
                  <Col xs={5}>
                    <Input type="text" placeholder=".col-xs-5" standalone />
                  </Col>
                </Row>
              </Panel>

              <Panel header="Input Addon">
                <Input type="text" addonBefore="@" />
                <Input type="text" addonAfter=".00" />
                <Input type="text" addonBefore="$" addonAfter=".00" />

                <h4>With icons</h4>
                <Input type="email" addonBefore={<I name="envelope" />} placeholder="Email" />
                <Input type="text" addonBefore={<I name="check" />} />
                <Input type="text" addonBefore={<I name="dollar" />} addonAfter={<I name="ambulance" />} />

                <h4>With checkbox and radio inputs</h4>
                <Row>
                  <Col md={6}>
                    <Input type="text" addonBefore={<input type="checkbox" />} />
                  </Col>
                  <Col md={6}>
                    <Input type="text" addonBefore={<input type="radio" />} />
                  </Col>
                </Row>

                <h4>With buttons</h4>
                <Input
                  type="text"
                  bsSize="large"
                  buttonBefore={
                    <DropdownButton title="Action" bsSize="large" bsStyle="danger">
                      <MenuItem key="1">Action 1</MenuItem>
                      <MenuItem key="2">Action 2</MenuItem>
                      <MenuItem key="3">Action 3</MenuItem>
                    </DropdownButton>
                  } />
                  <br />
                  <Input
                    type="text"
                    buttonBefore={
                      <Button bsStyle="success">Before</Button>
                    } />
                  <br />
                  <Input
                    type="text"
                    bsSize="small"
                    buttonAfter={
                      <Button bsStyle="warning">After</Button>
                    } />
              </Panel>
            </Col>

            <Col md={6}>
              <Panel header="Horizontal Form">
                <form className="form-horizontal">
                  <Input type="text" label="Text" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                  <Input type="textarea" label="Textarea" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                  <Input type="checkbox" label="Checkbox" wrapperClassName="col-xs-offset-2 col-xs-10" help="Offset is applied to wrapper." />
                </form>
              </Panel>

              <Panel header="General Elements">
                <Input type="text" label="Text" placeholder="text ..." />
                <Input type="text" label="Text" placeholder="text ..." disabled />

                <Input type="textarea" label="Textarea" placeholder="textarea ..." />
                <Input type="textarea" label="Textarea" placeholder="textarea ..." disabled />

                <Input type="text" bsStyle="success" label="Success" hasFeedback />
                <Input type="text" bsStyle="warning" label="Warning" hasFeedback />
                <Input type="text" bsStyle="error" label="Error" hasFeedback />

                <Input type="select" label="Select" placeholder="select">
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                  <option value="option 5">option 5</option>
                </Input>

                <Input type="select" label="Multiple Select" multiple>
                  <option value="select">select (multiple)</option>
                  <option value="option 1">option 1</option>
                  <option value="option 2">option 2</option>
                  <option value="option 3">option 3</option>
                  <option value="option 4">option 4</option>
                  <option value="option 5">option 5</option>
                </Input>

                <Input type="checkbox" label="Checkbox" />
                <Input type="checkbox" label="Checkbox Readonly" checked readOnly />
                <Input type="checkbox" label="Checkbox Disabled" disabled/>

                <Input type="radio" label="Radio" checked />
                <Input type="radio" label="Radio Readonly" checked />
                <Input type="radio" label="Radio Disabled" checked disabled />
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

FormGeneralPage.displayName = 'FormGeneralPage';

FormGeneralPage.defaultProps = {
};

export default FormGeneralPage;
