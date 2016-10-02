'use strict';

import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import I from 'react-fontawesome';
import {Link} from 'react-router';
import Editor from '../components/Editor/Editor';

class MailWritePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: `
        <h1><u>Heading Of Message</u></h1>
        <h4>Subheading</h4>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
        <ul>
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
        </ul>
        <p>Thank you,</p>
        <p>John Doe</p>
      `
    };
  }
  handleChange(text) {
    this.setState({
      text: text
    });
  }
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Write Mail
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><I name="dashboard" /> Home</a></li>
            <li className="active">Mailbox</li>
          </ol>
        </section>
        <section className="content">
          <Row>
            <Col md={3}>
              <Link to="/mailbox/write" className="btn btn-primary btn-block margin-bottom">Compose</Link>
              <Panel header="Folders">
                <ul className="nav nav-pills nav-stacked">
                  <li className="active"><a href="#"><I name="inbox" /> Inbox <span className="label label-primary pull-right">12</span></a></li>
                  <li><a href="#"><I name="envelope-o" /> Sent</a></li>
                  <li><a href="#"><I name="file-text-o" /> Drafts</a></li>
                  <li><a href="#"><I name="filter" /> Junk <span className="label label-warning pull-right">65</span></a></li>
                  <li><a href="#"><I name="trash-o" /> Trash</a></li>
                </ul>
              </Panel>

              <Panel header="Labels">
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#"><I name="circle-o" className="text-red" /> Important</a></li>
                  <li><a href="#"><I name="circle-o" className="text-yellow" /> Promotions</a></li>
                  <li><a href="#"><I name="circle-o" className="text-light-blue" /> Social</a></li>
                </ul>
              </Panel>
            </Col>
            <Col md={9}>
              <Panel
                header="New Message"
                footer={
                  <div>
                    <div className="pull-right">
                      <button className="btn btn-default"><I name="pencil" /> Draft</button>
                      <button type="submit" className="btn btn-primary"><I name="envelope-o" /> Send</button>
                    </div>
                    <button className="btn btn-default"><I name="times" /> Discard</button>
                  </div>
                }>
                <div className="form-group">
                  <input className="form-control" placeholder="To:" />
                </div>
                <div className="form-group">
                  <input className="form-control" placeholder="Subject:" />
                </div>
                <div className="form-group">
                  <div id="compose-textarea" className="form-control" style={{height: '500px'}}>
                    <Editor
                      text={this.state.text}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="btn btn-default btn-file">
                    <I name="paperclip" /> Attachment
                    <input type="file" name="attachment" />
                  </div>
                  <p className="help-block">Max. 32MB</p>
                </div>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

MailWritePage.displayName = 'MailWritePage';

MailWritePage.defaultProps = {
};

export default MailWritePage;
