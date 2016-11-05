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
          className: 'callout-danger'
      },
      isUploading: false,
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
            className: {$set: 'callout-danger'}
          },
          isProcessing: {$set: false},
          isUploading: {$set: false}
        }));
      }
    } else {
      this.setState(update(this.state, {
        errorStyle: {
          display: {$set: "inline"},
          value: {$set: "Error: code=" + result.status + ", text='" + result.responseText + "'"},
          className: {$set: 'callout-danger'}
        },
        isProcessing: {$set: false},
        isUploading: {$set: false}
      }));
    }
  }

  onProgress(e, request, progress) {
    if (progress == 100) {
      this.setState(update(this.state, {
        errorStyle: {
          display: {$set: "inline"},
          value: {$set: "Processing GC logs, don't close this page ..."},
          className: {$set: 'callout-info'}
        },
        isProcessing: {$set: true},
        isUploading: {$set: false}
      }));
    } else if (progress == 0) {
      this.setState(update(this.state, {
        errorStyle: {
            display: {$set: "none"},
            value: {$set: ""},
            className: {$set: 'callout-danger'}
        },
        isProcessing: {$set: false},
        isUploading: {$set: false}
      }));
    } else {
      this.setState(update(this.state, {
        isUploading: {$set: true}
      }));
    }
  }

  onError(e, result) {
    this.setState(update(this.state, {
      errorStyle: {
        display: {$set: "inline"},
        value: {$set: "An error occured while uploading. Please refresh the page and try again."},
        className: {$set: 'callout-danger'}
      },
      isProcessing: {$set: false},
      isUploading: {$set: false}
    }));
  }

  onAbort() {
    if (!this.state.isProcessing) {
      this.setState(update(this.state, {
        errorStyle: {
          display: {$set: "inline"},
          value: {$set: "Upload aborted. Please refresh the page and try again."},
          className: {$set: 'callout-danger'}
        },
        isProcessing: {$set: false},
        isUploading: {$set: false}
      }));
    }
  }

  formGetter(){
    return new FormData(document.getElementById('customForm'));
  }

  customFormRenderer(onSubmit){
    return (
      <form id='customForm' style={{marginBottom: '15px'}}>
        <label htmlFor="exampleInputFile">File input</label>
        <input style={{display: 'block'}} disabled={this.state.isUploading || this.state.isProcessing} type="file" name='file' id="exampleInputFile" />
        <p/>
        <Button type="button" bsStyle="primary" disabled={this.state.isUploading || this.state.isProcessing} onClick={onSubmit}>Upload</Button>
      </form>
    );
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
        <FileUploadProgress key='ex1' url={GCPlotCore.authUrl("/gc/jvm/log/process")}
          onProgress={this.onProgress.bind(this)}
          onLoad={this.onLoad.bind(this)}
          onError={this.onError.bind(this)}
          onAbort={this.onAbort.bind(this)}
          formGetter={this.formGetter.bind(this)}
          formRenderer={this.customFormRenderer.bind(this)}
          />
          <p/>
          <Col style={this.state.errorStyle} md={6}>
          <div className={"callout " + this.state.errorStyle.className}>
          {(() => {
              if (this.state.isProcessing) {
                  return <Spinner spinnerName="three-bounce"/>
              }
          })()}
            <p>{this.state.errorStyle.value}</p>
          </div>
          </Col>
      </section>
      </div>
    );
  }

}

QuickProcessPage.displayName = 'QuickProcessPage';

QuickProcessPage.defaultProps = {
};

export default QuickProcessPage;
