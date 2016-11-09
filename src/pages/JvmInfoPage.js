'use strict';

import $ from 'jquery';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, Input, Modal, Button } from 'react-bootstrap';
import I from 'react-fontawesome';
import GCPlotCore from '../core'
import moment from 'moment-timezone';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
require('../css/rc-tp-override.css');
require('../css/react-datepicker.css');
import {Chart} from 'react-google-charts';

var Spinner = require('react-spinkit');
var clipboard = require('clipboard-js');
var update = require('react-addons-update');

class JvmInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analyse_id: props.params.analyseId,
      jvm_id: props.params.jvmId,
      analyse: {
        name: "",
        jvm_ids: [],
        jvm_vers: {},
        jvm_names: {},
        jvm_gcts: {},
        last_utc: {},
        jvm_mem: {},
        cnts: false,
        tz: null
      },
      dateRangeState: {
        startDate: moment(),
        endDate: moment(),
        timeEnabled: false
      },
      data: [],
      pauseDurationData: [[moment().toDate(), null, null, null, null]],
      pauseDurationRange: {
        from: moment().toDate(),
        to: moment().toDate()
      },
      isLoading: false
    };
  }

  tz(a) {
    var analyse = a || this.state.analyse;
    if ((typeof analyse.tz) == 'undefined' || analyse.tz == null || analyse.tz == "") {
      return "Europe/London";
    } else {
      return analyse.tz;
    }
  }

  isLastEventPresented() {
    var lastEvent = this.state.analyse.last_utc[this.state.jvm_id];
    return ((typeof lastEvent) != 'undefined') && lastEvent != null;
  }

  mm() {
    var m;
    var lastEvent = this.state.analyse.last_utc[this.state.jvm_id];
    if (this.isLastEventPresented()) {
      m = moment.tz(lastEvent, this.tz());
    } else {
      m = moment().tz(this.tz());
    }
    return m;
  }

  formattedTime(format) {
    return this.mm().format(format);
  }

  componentDidUpdate() {
    if (this.state.jvm_id != this.props.params.jvmId || this.state.analyse_id != this.props.params.analyseId) {
      this.updateAll();
    }
  }

  updateAll() {
    this.state.analyse_id = this.props.params.analyseId;
    this.state.jvm_id = this.props.params.jvmId;
    this.state.analyse = {
      name: "",
      jvm_ids: [],
      jvm_vers: {},
      jvm_names: {},
      jvm_gcts: {},
      last_utc: {},
      jvm_mem: {},
      tz: null,
      dateRangeState: {
        startDate: moment(),
        endDate: moment(),
        timeEnabled: false
      },
      data: [],
      pauseDurationData: [[moment().toDate(), null, null, null, null]],
      pauseDurationRange: {
        from: moment(),
        to: moment()
      },
      isLoading: false
    };
    this.componentWillMount();
  }

  componentWillMount() {
    GCPlotCore.analyses((function(r) {
      var analyses = r.analyses;
      for (var i = 0; i < analyses.length; i++) {
        if (analyses[i].id == this.props.params.analyseId) {
          console.log(analyses[i]);
          var lastEvent = analyses[i].last_utc[this.props.params.jvmId];
          var endDate, startDate;
          if (lastEvent) {
            endDate = moment.tz(lastEvent, this.tz(analyses[i]));
            startDate = moment(endDate).subtract(1, 'days');
            if (startDate.hours() >= 0 || startDate.minutes() > 0) {
              startDate.subtract(1, 'minutes');
            }
          } else {
            endDate = moment({hour :23, minute :59, second :59, millisecond :999});
            startDate = moment(endDate).hour(0).minute(0).second(0).millisecond(0).subtract(1, 'days');
          }
          this.setState(update(this.state, {
            analyse: {$set: analyses[i]},
            dateRangeState: {
              endDate: {$set: endDate},
              startDate: {$set: startDate}
            }
          }));
          break;
        }
      }
    }).bind(this), function(code, title, msg) {
      this.setState(this.state);
      alert(code + "|" + title + "|" + msg);
    }.bind(this));
  }

  componentDidMount() {

  }

  copyIdClick() {
    clipboard.copy(this.state.analyse.id);
  }

  handleChangeStart(date) {
    this.setState(update(this.state, {
      dateRangeState: {
        startDate: {$set: date}
      }
    }));
  }

  handleChangeEnd(date) {
    this.setState(update(this.state, {
      dateRangeState: {
        endDate: {$set: date}
      }
    }));
  }

  onTimeChange(e) {
    this.setState(update(this.state, {
      dateRangeState: {
        timeEnabled: {$set: e.target.checked}
      }
    }));
  }

  onReloadClick() {
    var start = moment(this.state.dateRangeState.startDate);
    var end = moment(this.state.dateRangeState.endDate);

    if (!this.state.dateRangeState.timeEnabled) {
      start.hour(0).minute(0).second(0).millisecond(0);
      end.hour(23).minute(59).second(59).millisecond(999);
    }

    console.log("start " + moment.tz(start, 'UTC').valueOf());
    console.log("end " + moment.tz(end, 'UTC').valueOf());

    this.setState(update(this.state, {
      data: {$set: []},
      pauseDurationData: {$set: [[moment().toDate(), null, null, null, null]]},
      isLoading: {$set: true}
    }));
    var dd = [];
    var pauseDurationData = [];
    var lastPauseD, firstPauseD = null;
    GCPlotCore.lazyGCEvents({
      analyse_id: this.state.analyse_id,
      jvm_id: this.state.jvm_id,
      tz: this.tz(),
      from: moment.tz(start, 'UTC').valueOf(),
      to: moment.tz(end, 'UTC').valueOf()
    }, function(d) {
      //dd.push(d);
      if (typeof d.c == 'undefined') {
        if (d.g.length == 0) return;
        if (firstPauseD == null) {
          firstPauseD = moment.tz(d.d, this.tz()).toDate();
        }
        lastPauseD = moment.tz(d.d, this.tz()).toDate();
        if (d.g.length == 1) {
          if ($.inArray(GCPlotCore.YOUNG_GEN, d.g) >= 0) {
            pauseDurationData.push([lastPauseD, d.p / 1000, null, null, null]);
          } else if ($.inArray(GCPlotCore.TENURED_GEN, d.g) >= 0) {
            pauseDurationData.push([lastPauseD, null, d.p / 1000, null, null]);
          } else if ($.inArray(GCPlotCore.METASPACE_GEN, d.g) >= 0) {
            pauseDurationData.push([lastPauseD, null, null, d.p / 1000, null]);
          }
        } else {
          pauseDurationData.push([lastPauseD, null, null, null, d.p / 1000]);
        }
      }
    }.bind(this), function(err) {
      console.log("error: " + err);
    }, function() {
      this.setState(update(this.state, {
        //data: {$push: dd},
        pauseDurationData: {$push: pauseDurationData},
        pauseDurationRange: {
          from: {$set: lastPauseD},
          to: {$set: firstPauseD}
        },
        isLoading: {$set: false}
      }));
    }.bind(this));
  }

  render() {
    return (
      <div className="content-wrapper">
      <section className="content-header">
        <h1>
          JVM Info
          <small>{this.state.analyse.jvm_names[this.props.params.jvmId]} from {this.state.analyse.name}</small>
        </h1>
      </section>
      <section className="content">
      <Panel footer={<div>
        <Row>
        <Col md={2}>
        <Button type="button" bsStyle="default" disabled={this.state.isLoading} onClick={this.onReloadClick.bind(this)}>{(() => {
            if (this.state.isLoading) {
                return <Spinner spinnerName="circle"/>
            } else {
              return <div>Reload</div>
            }
        })()}</Button>
        </Col>
        </Row>
      </div>}>
      <Row>
      <Col md={4}>
      <p><b>Dates Range:</b></p>
        <DatePicker
          selected={this.state.dateRangeState.startDate}
          selectsStart  startDate={this.state.dateRangeState.startDate}
          endDate={this.state.dateRangeState.endDate}
          onChange={this.handleChangeStart.bind(this)} />
        <DatePicker
          selected={this.state.dateRangeState.endDate}
          selectsEnd  startDate={this.state.dateRangeState.startDate}
          endDate={this.state.dateRangeState.endDate}
          onChange={this.handleChangeEnd.bind(this)} />
        </Col>
        <Col md={5}>
          <p><b>Times Range:</b></p>
          <input type="checkbox" className="col-xs-1" checked={this.state.dateRangeState.timeEnabled} onChange={this.onTimeChange.bind(this)}/>
          <TimePicker
            disabled={!this.state.dateRangeState.timeEnabled}
            value={this.state.dateRangeState.startDate}
            onChange={this.handleChangeStart.bind(this)}
          />
          <TimePicker
            disabled={!this.state.dateRangeState.timeEnabled}
            value={this.state.dateRangeState.endDate}
            onChange={this.handleChangeEnd.bind(this)}
          />
        </Col>
        </Row>
      </Panel>
      <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="General Stats">
          <Row>
          <Col md={12}>
          <Panel header={<span><I name="info" /> Brief Info</span>}>
            <dl>
              <dt>Name</dt>
              <dd><code>{this.state.analyse.jvm_names[this.props.params.jvmId]}</code></dd>
              <dt>Last GC Event Time</dt>
              {(() => {
                  if (this.isLastEventPresented()) {
                    return <dd>{this.formattedTime("MMMM DD, YYYY (hh:mm:ss)")} - {this.tz()}</dd>
                  } else {
                    return <dd>There is no info about last GC Event observed.</dd>
                  }
              })()}
              <dt>Analyse Type</dt>
              {(() => {
                  if (this.state.analyse.cnts) {
                    return <dd>Continuous, with Realtime Connection support.</dd>
                  } else {
                    return <dd>Single Log file.</dd>
                  }
              })()}
            </dl>
          </Panel>
          </Col>
          </Row>
          <Row>
          <Col md={6}>
          <Panel header={<span><I name="server" /> Last Server Info</span>}>
          {(() => {
              if (this.state.analyse.jvm_mem[this.props.params.jvmId]) {
                return (<dl>
                  <dt>Page Size</dt>
                  <dd><code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].ps, true)}</code> ({this.state.analyse.jvm_mem[this.props.params.jvmId].ps} bytes)</dd>
                  <dt>Physical Total</dt>
                  <dd><code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].pt, true)}</code> ({this.state.analyse.jvm_mem[this.props.params.jvmId].pt} bytes)</dd>
                  <dt>Physical Free</dt>
                  <dd><code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].pf, true)}</code> ({this.state.analyse.jvm_mem[this.props.params.jvmId].pf} bytes)</dd>
                  <dt>Physical Occupied</dt>
                  <dd><code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].pt - this.state.analyse.jvm_mem[this.props.params.jvmId].pf, true)}</code> ({this.state.analyse.jvm_mem[this.props.params.jvmId].pt - this.state.analyse.jvm_mem[this.props.params.jvmId].pf} bytes)</dd>
                  <dt>Swap Total</dt>
                  <dd><code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].st, true)}</code> ({this.state.analyse.jvm_mem[this.props.params.jvmId].st} bytes)</dd>
                  <dt>Swap Free</dt>
                  <dd><code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].sf, true)}</code> ({this.state.analyse.jvm_mem[this.props.params.jvmId].sf} bytes)</dd>
                  <dt>Swap Occupied</dt>
                  <dd><code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].st - this.state.analyse.jvm_mem[this.props.params.jvmId].sf, true)}</code> ({this.state.analyse.jvm_mem[this.props.params.jvmId].st - this.state.analyse.jvm_mem[this.props.params.jvmId].sf} bytes)</dd>
                </dl>);
              } else {
                return <dd>No info recorded. Probably the file was truncated or corrupted.</dd>
              }
          })()}
          </Panel>
          </Col>
          <Col md={6}>
          <Panel header={<span><I name="flag" /> JVM Flags</span>}>
          {(() => {
              if (this.state.analyse.jvm_hdrs[this.props.params.jvmId]) {
                return (<code>{this.state.analyse.jvm_hdrs[this.props.params.jvmId]}</code>);
              } else {
                return <dd>No info recorded. Probably the file was truncated or corrupted.</dd>
              }
          })()}
          </Panel>
          </Col>
          </Row>
        </Tab>
        <Tab eventKey={2} title="Graphs">
        <Panel><Chart
      chartType="ScatterChart"
      options={{
         	title: 'Pause Durations (Stop-The-World only)',
          hAxis: {
            viewWindow: {
              min: this.state.pauseDurationRange.from,
              max: this.state.pauseDurationRange.to
            },
            gridlines: {
              count: -1,
              units: {
                days: {format: ['MMM dd']},
                hours: {format: ['HH:mm', 'ha']},
              }
            },
            minorGridlines: {
              units: {
                hours: {format: ['hh:mm:ss a', 'ha']},
                minutes: {format: ['HH:mm a Z', ':mm']}
              }
            }
          },
          series: {
            0: { pointShape: 'circle' },
            1: { pointShape: 'triangle' },
            2: { pointShape: 'star' },
            3: { pointShape: 'polygon' }
          }
      }}
      rows={this.state.pauseDurationData}
      columns={[
      	{
      		'type': 'datetime',
      		'label' : 'Time'
      	},
      	{
      		'type' : 'number',
      		'label' : 'Young Pause'
      	},
        {
      		'type' : 'number',
      		'label' : 'Tenured Pause'
      	},
        {
      		'type' : 'number',
      		'label' : 'Metaspace/Perm Pause'
      	},
        {
      		'type' : 'number',
      		'label' : 'Full Pause (Young + Tenured + Metaspace/Perm)'
      	}
      ]}
      graph_id="ScatterChart"
      width="100%"
      height="400px"
      legend_toggle={true}
     /></Panel>
        </Tab>
        <Tab eventKey={3} title="Tenuring Stats">

        </Tab>
        <Tab eventKey={4} title="Causes & Phases">

        </Tab>
        <Tab eventKey={5} title="Performance">

        </Tab>
        <Tab eventKey={6} title="Manage">
          <Input type="text" label="ID" value={this.props.params.jvmId} addonAfter={<I name="clipboard" style={{cursor: "pointer"}} onClick={this.copyIdClick.bind(this)} />} disabled={true}/>
        </Tab>
      </Tabs>
      </section>
      </div>
    );
  }
}

/*
<p>{this.tz()}</p>
<p>{this.formattedTime("MMMM DD, YYYY (hh:mm:ss)")}</p>
<p>{this.state.analyse.jvm_hdrs[this.props.params.jvmId]}</p>
<Button bsStyle="success" onClick={this.testRequestLastDay.bind(this)}>Request last day</Button>
*/

JvmInfoPage.displayName = 'JvmInfoPage';

JvmInfoPage.defaultProps = {
};

export default JvmInfoPage;
