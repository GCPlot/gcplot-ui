'use strict';

import React from 'react';
import { Row, Col, Panel, Table } from 'react-bootstrap';
import I from 'react-fontawesome';
import {Link} from 'react-router';

class MailboxPage extends React.Component {
  componentDidMount () {
    //Enable iCheck plugin for checkboxes
    //iCheck for checkbox and radio inputs
    $('.mailbox-messages input[type="checkbox"]').iCheck({
      checkboxClass: 'icheckbox_flat-blue',
      radioClass: 'iradio_flat-blue'
    });

    //Enable check and uncheck all functionality
    $('.checkbox-toggle').click(function () {
      var clicks = $(this).data('clicks');
      if (clicks) {
        //Uncheck all checkboxes
        $('.mailbox-messages input[type="checkbox"]').iCheck('uncheck');
        $('.fa', this).removeClass('fa-check-square-o').addClass('fa-square-o');
      } else {
        //Check all checkboxes
        $('.mailbox-messages input[type="checkbox"]').iCheck('check');
        $('.fa', this).removeClass('fa-square-o').addClass('fa-check-square-o');
      }
      $(this).data('clicks', !clicks);
    });

    //Handle starring for glyphicon and font awesome
    $('.mailbox-star').click(function (e) {
      e.preventDefault();
      //detect type
      var $this = $(this).find('a > i');
      var glyph = $this.hasClass('glyphicon');
      var fa = $this.hasClass('fa');

      //Switch states
      if (glyph) {
        $this.toggleClass('glyphicon-star');
        $this.toggleClass('glyphicon-star-empty');
      }

      if (fa) {
        $this.toggleClass('fa-star');
        $this.toggleClass('fa-star-o');
      }
    });
  }
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Mailbox
            <small>10 New Messages</small>
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
                header="Inbox"
                footer={
                  <div className="mailbox-controls">
                    <button className="btn btn-default btn-sm checkbox-toggle"><I name="square-o" /></button>
                    <div className="btn-group">
                      <button className="btn btn-default btn-sm"><I name="trash-o" /></button>
                      <button className="btn btn-default btn-sm"><I name="reply" /></button>
                      <button className="btn btn-default btn-sm"><I name="share" /></button>
                    </div>
                    <button className="btn btn-default btn-sm"><I name="refresh" /></button>
                    <div className="pull-right">
                      1-50/200
                      <div className="btn-group">
                        <button className="btn btn-default btn-sm"><I name="chevron-left" /></button>
                        <button className="btn btn-default btn-sm"><I name="chevron-right" /></button>
                      </div>
                    </div>
                  </div>
                }>
                <div className="mailbox-controls">
                  <button className="btn btn-default btn-sm checkbox-toggle"><I name="square-o" /></button>
                  <div className="btn-group">
                    <button className="btn btn-default btn-sm"><I name="trash-o" /></button>
                    <button className="btn btn-default btn-sm"><I name="reply" /></button>
                    <button className="btn btn-default btn-sm"><I name="share" /></button>
                  </div>
                  <button className="btn btn-default btn-sm"><I name="refresh" /></button>
                  <div className="pull-right">
                    1-50/200
                    <div className="btn-group">
                      <button className="btn btn-default btn-sm"><I name="chevron-left" /></button>
                      <button className="btn btn-default btn-sm"><I name="chevron-right" /></button>
                    </div>
                  </div>
                </div>
                <div className="table-responsive mailbox-messages">
                  <Table hover striped>
                    <tbody>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">5 mins ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star-o" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">28 mins ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star-o" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">11 hours ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">15 hours ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">Yesterday</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star-o" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star-o" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star-o" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star-o" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">4 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">12 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star-o" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">12 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">14 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><I name="star" className="text-yellow" /></a></td>
                        <td className="mailbox-name"><Link to="/mailbox/read">John Doe</Link></td>
                        <td className="mailbox-subject"><b>Reactive Admin Issue List</b> - Trying to find a solution to this problem...</td>
                        <td className="mailbox-attachment"><I name="paperclip" /></td>
                        <td className="mailbox-date">15 days ago</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

MailboxPage.displayName = 'MailboxPage';

MailboxPage.defaultProps = {
};

export default MailboxPage;
