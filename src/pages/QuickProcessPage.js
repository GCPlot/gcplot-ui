'use strict';

import $ from 'jquery';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, Input, Modal, ButtonInput, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import GCPlotCore from '../core'
import FileUploadProgress  from 'react-fileupload-progress';

var Spinner = require('react-spinkit');
var update = require('react-addons-update');

class QuickProcessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStyle: {
          display: "none",
          value: "",
          color: 'red'
      },
      isProcessing: false
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  onLoad(e, result) {
    if (result.status == 200) {
      var resp = JSON.parse(result.responseText);
      if ((typeof resp.result != 'undefined') && resp.result != null && resp.result.success == 1) {
        location.reload();
      } else {
        this.setState(update(this.state, {
          errorStyle: {
            display: {$set: "inline"},
            value: {$set: "Error: " + resp.message},
            color: {$set: "red"}
          },
          isProcessing: {$set: false}
        }));
      }
    } else {
      this.setState(update(this.state, {
        errorStyle: {
          display: {$set: "inline"},
          value: {$set: "Error: code=" + result.status + ", text='" + result.responseText + "'"},
          color: {$set: "red"}
        },
        isProcessing: {$set: false}
      }));
    }
  }

  onProgress(e, request, progress) {
    if (progress == 100) {
      this.setState(update(this.state, {
        errorStyle: {
          display: {$set: "inline"},
          value: {$set: "Processing GC logs, don't close this page ..."},
          color: {$set: "black"}
        },
        isProcessing: {$set: true}
      }));
    } else if (progress == 0) {
      this.setState(update(this.state, {
        errorStyle: {
            display: {$set: "none"},
            value: {$set: ""},
            color: {$set: 'red'},
        },
        isProcessing: {$set: false}
      }));
    }
  }

  onError(e, result) {
    this.setState(update(this.state, {
      errorStyle: {
        display: {$set: "inline"},
        value: {$set: "An error occured while uploading. Please refresh the page and try again."},
        color: {$set: "red"},
      },
      isProcessing: {$set: false}
    }));
  }

  onAbort() {
    this.setState(update(this.state, {
      errorStyle: {
        display: {$set: "inline"},
        value: {$set: "Upload aborted. Please refresh the page and try again."},
        color: {$set: "red"},
      },
      isProcessing: {$set: false}
    }));
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
        <FileUploadProgress key='ex1' /*url='http://malsup.com/jquery/form/file-echo2.php'*/ url='http://gs-dev.gcplot.com/gc/jvm/log/process?token=d9ea6904f8ef0817eabd2774ce87b3786cf1828197e143dbaf749e928570a08b'
          onProgress={this.onProgress.bind(this)}
          onLoad={this.onLoad.bind(this)}
          onError={this.onError.bind(this)}
          onAbort={this.onAbort.bind(this)}
          />
          <p/>
          {(() => {
              if (this.state.isProcessing) {
                  return <Spinner spinnerName="three-bounce"/>
              }
          })()}
          <p style={this.state.errorStyle}>{this.state.errorStyle.value}</p>
      </section>
      </div>
    );
  }

}

QuickProcessPage.displayName = 'QuickProcessPage';

QuickProcessPage.defaultProps = {
};

export default QuickProcessPage;
