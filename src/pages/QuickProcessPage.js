'use strict';

import $ from 'jquery';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, Input, Modal, ButtonInput, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import GCPlotCore from '../core'
require('imports?define=>false!blueimp-file-upload')

var update = require('react-addons-update');

class QuickProcessPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#fileupload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
            });
        }
    });
  }

  componentDidUpdate() {
    $('#fileupload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
            });
        }
    });
  }

  render() {
    return (
      <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Quick Process
          <small>Upload your GC log files</small>
        </h1>
      </section>
      <section className="content">
        <input id="fileupload" type="file" name="files[]" data-url="server/php/" single/>
      </section>
      </div>
    );
  }

}

QuickProcessPage.displayName = 'QuickProcessPage';

QuickProcessPage.defaultProps = {
};

export default QuickProcessPage;
