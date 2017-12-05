'use strict';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, Input, Modal, ButtonInput, Button } from 'react-bootstrap';

class FAQ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="content-wrapper">
      <section className="content-header">
          <h1>
              FAQ
          </h1>
      </section>
      <section className="content">
        <Row>
          <Col md={12}>
            <Panel>
              <dl>
                <dt>1. What JVMs does your analyzer support?</dt>
                <dd>Currently, we support all stable versions of the Hotspot JVM (except Java 9)</dd>
                <p/>
                <dt>2. Is GCPlot free to use?</dt>
                <dd>Yes, it is open source and completely free.</dd>
                <p/>
                <dt>3. Can I install and use it in my private environment?</dt>
                <dd>Yes, we can offer such option. For now, contact us at <a href="mailto:sales@gcplot.com">sales@gcplot.com</a> with such an inquiry.</dd>
                <p/>
                <dt>4. The report you generate is not correct. What should I do?</dt>
                <dd>You should contact us directly by <a href="mailto:support@gcplot.com">support@gcplot.com</a> or use <a href="https://groups.google.com/forum/#!forum/gcplot" target="_blank">Google Forum</a>. We will make sure that any bug will be fixed.</dd>
                <p/>
                <dt>5. How can I analyze my GC logs?</dt>
                <dd>For now, you can simply upload your file in <a href="/quick_process">Quick Process</a> section. After that, the complete analysis will be available under 'Files' analysis group. There is also <a href="/realtime-connection">Realtime Connection</a>, which allows you to upload your GC files continuously and automatically from multiple machines.</dd>
                <p/>
                <dt>6. What is Analysis Group?</dt>
                <dd>Analysis Group helps you to organize your data sources in the best way you see it. The most common case is when you have different clusters, and create separate group for each:</dd>
                <p><img width="180px" height="241px" src="img/analysis_groups.png" /></p>
                <dd>There might be a number of JVMs under each Analysis Group. Each JVM has its own unique ID, which is used by Realtime Connector to upload data from the appropriate machine.</dd>
                <dd>There is also a default 'Files' Analysis Group, which contains all manually uploaded log files (via 'Quick Process' page):</dd>
                <p><img width="180px" height="111px" src="img/files-group.png" /></p>
                <p/>
                <dt>7. Can I select a particular interval while building the report?</dt>
                <dd>Of course. You can set the interval to the exact second, while the width of the interval can be started from the minute.</dd>
                <p/>
                <dt>8. How to tell JVM to start producing GC logs?</dt>
                <dd>Here are recommended parameters for maximum detailed report: <code>-XX:+PrintGCDetails -XX:+PrintTenuringDistribution -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -Xloggc:/path/to/file</code></dd>
                <p />
                <dt>9. Which timezone is used for the reports?</dt>
                <dd>All reports are in the timezone of the parent Analysis Group, which can be configured at the creation time, or modified anytime later. On the server side we store everything in UTC.</dd>
              </dl>
            </Panel>
          </Col>
        </Row>
      </section>
    </div>;
  }
}

FAQ.displayName = 'FAQ';

FAQ.defaultProps = {
};

export default FAQ;
