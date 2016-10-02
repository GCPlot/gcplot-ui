'use strict';

import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import I from 'react-fontawesome';
import {Link} from 'react-router';

class MailReadPage extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Read Mail
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
              <Panel header={
                <div>
                  <span>Read Mail</span>
                  <div className="box-tools pull-right">
                    <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Previous"><I name="chevron-left" /></a>
                    <a href="#" className="btn btn-box-tool" data-toggle="tooltip" title="Next"><I name="chevron-right" /></a>
                  </div>
                </div>}
                footer={
                  <div>
                    <div className="pull-right">
                      <button className="btn btn-default"><I name="reply" /> Reply</button>
                      <button className="btn btn-default"><I name="share" /> Forward</button>
                    </div>
                    <button className="btn btn-default"><I name="trash-o" /> Delete</button>
                    <button className="btn btn-default"><I name="print" /> Print</button>
                  </div>
                }>

                <div className="mailbox-read-info">
                  <h3>Message Subject Is Placed Here</h3>
                  <h5>From: support@almsaeedstudio.com <span className="mailbox-read-time pull-right">15 Feb. 2015 11:03 PM</span></h5>
                </div>
                <div className="mailbox-controls with-border text-center">
                  <div className="btn-group">
                    <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Delete"><I name="trash-o" /></button>
                    <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Reply"><I name="reply" /></button>
                    <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Forward"><I name="share" /></button>
                  </div>
                  <button className="btn btn-default btn-sm" data-toggle="tooltip" title="Print"><I name="print" /></button>
                </div>
                <div className="mailbox-read-message">
                  <p>Hello John,</p>
                  <p>Keffiyeh blog actually fashion axe vegan, irony biodiesel. Cold-pressed hoodie chillwave put a bird on it aesthetic, bitters brunch meggings vegan iPhone. Dreamcatcher vegan scenester mlkshk. Ethical master cleanse Bushwick, occupy Thundercats banjo cliche ennui farm-to-table mlkshk fanny pack gluten-free. Marfa butcher vegan quinoa, bicycle rights disrupt tofu scenester chillwave 3 wolf moon asymmetrical taxidermy pour-over. Quinoa tote bag fashion axe, Godard disrupt migas church-key tofu blog locavore. Thundercats cronut polaroid Neutra tousled, meh food truck selfies narwhal American Apparel.</p>
                  <p>Raw denim McSweeney's bicycle rights, iPhone trust fund quinoa Neutra VHS kale chips vegan PBR&amp;B literally Thundercats +1. Forage tilde four dollar toast, banjo health goth paleo butcher. Four dollar toast Brooklyn pour-over American Apparel sustainable, lumbersexual listicle gluten-free health goth umami hoodie. Synth Echo Park bicycle rights DIY farm-to-table, retro kogi sriracha dreamcatcher PBR&amp;B flannel hashtag irony Wes Anderson. Lumbersexual Williamsburg Helvetica next level. Cold-pressed slow-carb pop-up normcore Thundercats Portland, cardigan literally meditation lumbersexual crucifix. Wayfarers raw denim paleo Bushwick, keytar Helvetica scenester keffiyeh 8-bit irony mumblecore whatever viral Truffaut.</p>
                  <p>Post-ironic shabby chic VHS, Marfa keytar flannel lomo try-hard keffiyeh cray. Actually fap fanny pack yr artisan trust fund. High Life dreamcatcher church-key gentrify. Tumblr stumptown four dollar toast vinyl, cold-pressed try-hard blog authentic keffiyeh Helvetica lo-fi tilde Intelligentsia. Lomo locavore salvia bespoke, twee fixie paleo cliche brunch Schlitz blog McSweeney's messenger bag swag slow-carb. Odd Future photo booth pork belly, you probably haven't heard of them actually tofu ennui keffiyeh lo-fi Truffaut health goth. Narwhal sustainable retro disrupt.</p>
                  <p>Skateboard artisan letterpress before they sold out High Life messenger bag. Bitters chambray leggings listicle, drinking vinegar chillwave synth. Fanny pack hoodie American Apparel twee. American Apparel PBR listicle, salvia aesthetic occupy sustainable Neutra kogi. Organic synth Tumblr viral plaid, shabby chic single-origin coffee Etsy 3 wolf moon slow-carb Schlitz roof party tousled squid vinyl. Readymade next level literally trust fund. Distillery master cleanse migas, Vice sriracha flannel chambray chia cronut.</p>
                  <p>Thanks,<br />Jane</p>
                </div>

                <ul className="mailbox-attachments clearfix">
                  <li>
                    <span className="mailbox-attachment-icon"><I name="file-pdf-o" /></span>
                    <div className="mailbox-attachment-info">
                      <a href="#" className="mailbox-attachment-name"><I name="paperclip" /> Sep2014-report.pdf</a>
                      <span className="mailbox-attachment-size">
                        1,245 KB
                        <a href="#" className="btn btn-default btn-xs pull-right"><I name="cloud-download" /></a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="mailbox-attachment-icon"><I name="file-word-o" /></span>
                    <div className="mailbox-attachment-info">
                      <a href="#" className="mailbox-attachment-name"><I name="paperclip" /> App Description.docx</a>
                      <span className="mailbox-attachment-size">
                        1,245 KB
                        <a href="#" className="btn btn-default btn-xs pull-right"><I name="cloud-download" /></a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="mailbox-attachment-icon has-img"><img src="img/photo1.png" alt="Attachment" /></span>
                    <div className="mailbox-attachment-info">
                      <a href="#" className="mailbox-attachment-name"><I name="camera" /> photo1.png</a>
                      <span className="mailbox-attachment-size">
                        2.67 MB
                        <a href="#" className="btn btn-default btn-xs pull-right"><I name="cloud-download" /></a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="mailbox-attachment-icon has-img"><img src="img/photo2.png" alt="Attachment" /></span>
                    <div className="mailbox-attachment-info">
                      <a href="#" className="mailbox-attachment-name"><I name="camera" /> photo2.png</a>
                      <span className="mailbox-attachment-size">
                        1.9 MB
                        <a href="#" className="btn btn-default btn-xs pull-right"><I name="cloud-download" /></a>
                      </span>
                    </div>
                  </li>
                </ul>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

MailReadPage.displayName = 'MailReadPage';

MailReadPage.defaultProps = {
};

export default MailReadPage;
