'use strict';

import $ from 'jquery';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab, ButtonGroup, Table, ProgressBar, Input, Modal, Button } from 'react-bootstrap';
import I from 'react-fontawesome';
import GCPlotCore from '../core';
import moment from 'moment-timezone';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import {Chart} from 'react-google-charts';
import { browserHistory } from 'react-router';
import GenerationStats from '../components/Jvm/GenerationStats';

require('../css/rc-tp-override.css');
require('../css/react-datepicker.css');
var Spinner = require('react-spinkit');
var clipboard = require('clipboard-js');
var update = require('react-addons-update');

class JvmInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  hAxis(postfix) {
    if (!postfix) {
      postfix = "";
    }
    return {
      title: 'Time' + postfix,
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
    };
  }

  initialState() {
    return {
      analyse_id: this.props.params.analyseId,
      jvm_id: this.props.params.jvmId,
      analyse: {
        name: "",
        jvm_ids: [],
        jvm_vers: {},
        jvm_names: {},
        jvm_hdrs: {},
        jvm_gcts: {},
        first_utc: {},
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
      desiredSurvivorSize: -1,
      objectsAges: [],
      concurrentDurationData: [[this.toDateTz(moment()), null, '']],
      logConcurrentDurationData: [[this.toDateTz(moment()), null, '']],
      pauseDurationData: [[this.toDateTz(moment()), null, '', null, '', null, '', null, '']],
      logPauseDurationData: [[this.toDateTz(moment()), null, '', null, '', null, '', null, '']],
      promotionRateData: [[this.toDateTz(moment()), null]],
      allocationRateData: [[this.toDateTz(moment()), null]],
      youngUsedBeforeData: [[this.toDateTz(moment()), null, null]],
      youngUsedAfterData: [[this.toDateTz(moment()), null, null]],
      youngTotalData: [[this.toDateTz(moment()), null, null]],
      tenuredUsedAfterData: [[this.toDateTz(moment()), null, null, null]],
      tenuredTotalData: [[this.toDateTz(moment()), null, null, null]],
      heapUsedBeforeData: [[this.toDateTz(moment()), null, null]],
      heapUsedAfterData: [[this.toDateTz(moment()), null, null]],
      heapTotalData: [[this.toDateTz(moment()), null, null]],
      metaspaceUsage: [[this.toDateTz(moment()), null, null]],
      totalAvgPie: [['', 1]],
      usedAvgPie: [['', 1]],
      pauseTimeBar: [['', 1]],
      pauseAvgBar: [['', 1]],
      pauseDurationRange: {
        from: this.toDateTz(moment()),
        to: this.toDateTz(moment())
      },
      stats: null,
      isLoading: false,
      show: false,
      delete: {
        message: ""
      },
      reload: {
        message: ""
      }
    };
  }

  toDateTz(mm) {
    return new Date(mm.year(), mm.month(), mm.date(), mm.hour(), mm.minute(), mm.second(), mm.millisecond());
  }

  tz(a) {
    var analyse = a || this.state.analyse;
    if ((typeof analyse.tz) == 'undefined' || analyse.tz == null || analyse.tz == "") {
      return "Africa/Monrovia";
    } else {
      return analyse.tz;
    }
  }

  isFirstEventPresented() {
    var firstEvent = this.state.analyse.first_utc[this.state.jvm_id];
    return ((typeof firstEvent) != 'undefined') && firstEvent != null;
  }

  isLastEventPresented() {
    var lastEvent = this.state.analyse.last_utc[this.state.jvm_id];
    return ((typeof lastEvent) != 'undefined') && lastEvent != null;
  }

  lastEventMoment() {
    var m;
    var lastEvent = this.state.analyse.last_utc[this.state.jvm_id];
    if (this.isLastEventPresented()) {
      m = moment.utc(lastEvent).tz(this.tz());
    }
    return m;
  }

  firstEventMoment() {
    var m;
    var firstEvent = this.state.analyse.first_utc[this.state.jvm_id];
    if (this.isFirstEventPresented()) {
      m = moment.utc(firstEvent).tz(this.tz());
    }
    return m;
  }

  formattedTime(format, mmnt) {
    return mmnt.format(format);
  }

  componentDidUpdate() {
    if (this.state.jvm_id != this.props.params.jvmId || this.state.analyse_id != this.props.params.analyseId) {
      this.updateAll();
    }
  }

  updateAll() {
    this.state.analyse_id = this.props.params.analyseId;
    this.state.jvm_id = this.props.params.jvmId;
    this.state = this.initialState();
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
          var tz = this.tz(analyses[i]);
          if (lastEvent) {
            endDate = moment.utc(lastEvent).tz(tz);
            startDate = moment.utc(lastEvent).tz(tz).subtract(1, 'days');
            if (startDate.hours() >= 0 || startDate.minutes() > 0) {
              startDate.subtract(1, 'minutes');
            }
          } else {
            endDate = moment.tz({hour :23, minute :59, second :59, millisecond :999}, tz);
            startDate = moment(endDate, tz).hour(0).minute(0).second(0).millisecond(0).subtract(1, 'days');
          }
          this.state.analyse = analyses[i];
          this.state.dateRangeState = {
            endDate: endDate,
            startDate: startDate
          };
          this.setState(this.state);
          break;
        }
      }
      this.onReloadClick();
    }).bind(this), function(code, title, msg) {
      this.setState(this.state);
      alert(code + "|" + title + "|" + msg);
    }.bind(this));
  }

  componentDidMount() {

  }

  copyIdClick() {
    clipboard.copy(this.props.params.jvmId);
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

  buildTooltip(date, d) {
    var phase;
    if (typeof d.ph != 'undefined') {
      phase = GCPlotCore.PHASES[d.ph];
    } else {
      phase = null;
    }
    return '<dl style="padding: 10px; width: 250px; font-size: 16px"><dt>Time</dt><dd>' + date.format('DD, MMM, YYYY - HH:mm:ss') + '</dd><dt>Pause (Ms)</dt><dd>' +
        (d.p / 1000) + '</dd>' + (phase == null ? '' : '<dt>Phase</dt><dd>' + phase + '</dd>') + '</dl>';
  }

  fillCapacity(jdate, usedBeforeData, usedAfterData, totalData, cp, useAnnotation, annotation) {
    var k = 2/(10 + 1);
    var hbEma, haEma, htEma;
    if (usedBeforeData.length > 1) {
        var i = usedBeforeData.length - 1;
        var incr = useAnnotation ? 1 : 0;
        hbEma = usedBeforeData[i][1 + incr] * k + usedBeforeData[i - 1][2 + incr] * (1 - k);
        haEma = usedAfterData[i][1 + incr] * k + usedAfterData[i - 1][2 + incr] * (1 - k);
        htEma = totalData[i][1 + incr] * k + totalData[i - 1][2 + incr] * (1 - k);
    } else {
        hbEma = cp.b / 1024;
        haEma = cp.a / 1024;
        htEma = cp.t / 1024;
    }
    if (!useAnnotation) {
      usedBeforeData.push([jdate, cp.b / 1024, hbEma]);
      usedAfterData.push([jdate, cp.a / 1024, haEma]);
      totalData.push([jdate, cp.t / 1024, htEma]);
    } else {
      usedBeforeData.push([jdate, annotation, cp.b / 1024, hbEma]);
      usedAfterData.push([jdate, annotation, cp.a / 1024, haEma]);
      totalData.push([jdate, annotation, cp.t / 1024, htEma]);
    }
  }

  onReloadClick() {
    var start = moment(this.state.dateRangeState.startDate, this.tz());
    var end = moment(this.state.dateRangeState.endDate, this.tz());

    if (!this.state.dateRangeState.timeEnabled) {
        start.hour(0).minute(0).second(0).millisecond(0);
        end.hour(23).minute(59).second(59).millisecond(999);
    }

    console.log("start f: " + start.format());
    console.log("end f: " + end.format());
    console.log("start d: " + this.toDateTz(start));
    console.log("end d: " + this.toDateTz(end));
    console.log("start: " + start.valueOf());
    console.log("end: " + end.valueOf());

    this.state.stats = null;
    this.setState(update(this.state, {
        isLoading: {$set: true},
        stats: {$set: null},
        reload: {
            message: {$set: ""}
        }
    }));

    var concDurationData = [];
    var logConcDurationData = [];
    var pauseDurationData = [];
    var logPauseDurationData = [];

    var youngUsedBeforeData = [];
    var youngTotalData = [];
    var youngUsedAfterData = [];
    var tenuredUsedBeforeData = [];
    var tenuredTotalData = [];
    var tenuredUsedAfterData = [];
    var heapUsedBeforeData = [];
    var heapTotalData = [];
    var heapUsedAfterData = [];
    var allocationRateData = [];
    var promotionRateData = [];

    var metaspaceUsage = [];

    var stats = null;
    var lastTenured = 0;
    var lastTime, firstTime = null;
    GCPlotCore.lazyGCEvents({
        analyse_id: this.state.analyse_id,
        jvm_id: this.state.jvm_id,
        tz: this.tz(),
        from: start.valueOf(),
        to: end.valueOf()
    }, function(d) {
        if (typeof d.error != 'undefined') {
            this.setState(update(this.state, {
                reload: {
                    message: {
                        $set: GCPlotCore.ERRORS[d.error] + " (" + d.message + ")"
                    }
                }
            }));
        } else {
            if (typeof d.stats == 'undefined' && typeof d.alr == 'undefined') {
              if (typeof d.g == 'undefined' || d.g == null) {
                  d.g = [1];
              }
              if (d.g.length == 0)
                  return;
              if (firstTime == null) {
                  firstTime = moment.utc(d.d).tz(this.tz());
              }
              lastTime = moment.utc(d.d).tz(this.tz());
              var jdate = this.toDateTz(lastTime);
              // if not concurrent
              var tt = this.buildTooltip(lastTime, d);
              if (typeof d.c == 'undefined') {
                if (d.g.length == 1) {
                    if ($.inArray(GCPlotCore.YOUNG_GEN, d.g) >= 0) {
                        var hasYoung = typeof d.cp != 'undefined';
                        var hasTotal = typeof d.tc != 'undefined';
                        if (hasYoung) {
                            this.fillCapacity(jdate, youngUsedBeforeData, youngUsedAfterData, youngTotalData, d.cp);
                        }
                        if (hasTotal) {
                            this.fillCapacity(jdate, heapUsedBeforeData, heapUsedAfterData, heapTotalData, d.tc);
                        }
                        if (hasYoung && hasTotal) {
                          this.fillCapacity(jdate, tenuredUsedBeforeData, tenuredUsedAfterData, tenuredTotalData, {
                            b: Math.max(d.tc.b - d.cp.b, 0),
                            a: Math.max(d.tc.a - d.cp.a, 0),
                            t: Math.max(d.tc.t - d.cp.t, 0)
                          }, true, lastTenured > 0 ? '' : null);
                          if (lastTenured > 0) lastTenured = 0;
                        }
                        logPauseDurationData.push([jdate, Math.log10(d.p / 1000), tt, null, tt, null, tt, null, tt]);
                        pauseDurationData.push([jdate, d.p / 1000, tt, null, tt, null, tt, null, tt]);
                    } else if ($.inArray(GCPlotCore.TENURED_GEN, d.g) >= 0) {
                        lastTenured = d.d;
                        logPauseDurationData.push([jdate, null, tt, Math.log10(d.p / 1000), tt, null, tt,null, tt]);
                        pauseDurationData.push([jdate, null, tt, d.p / 1000, tt, null, tt, null, tt]);
                    } else if ($.inArray(GCPlotCore.METASPACE_GEN, d.g) >= 0 || $.inArray(GCPlotCore.PERM_GEN, d.g) >= 0) {
                        logPauseDurationData.push([jdate, null, tt, null, tt, Math.log10(d.p / 1000), tt, null, tt]);
                        pauseDurationData.push([jdate, null, tt, null, tt, d.p / 1000, tt, null, tt]);
                        if (typeof d.cp != 'undefined' && d.cp != null) {
                            metaspaceUsage.push([jdate, d.cp.b / 1024, d.cp.a / 1024]);
                        }
                    }
                } else {
                    if ($.inArray(GCPlotCore.TENURED_GEN, d.g) >= 0) {
                      lastTenured = d.d;
                    }
                    logPauseDurationData.push([jdate, null, tt, null, tt, null, tt, Math.log10(d.p / 1000), tt]);
                    pauseDurationData.push([jdate, null, tt, null, tt, null, tt, d.p / 1000, tt]);
                    if (typeof d.ecp != 'undefined') {
                        var msc = d.ecp[GCPlotCore.METASPACE_GEN_STR];
                        if (typeof msc == 'undefined' || msc == null) {
                          var msc = d.ecp[GCPlotCore.PERM_GEN_STR];
                        }
                        if (typeof msc != 'undefined' && msc != null) {
                            metaspaceUsage.push([jdate, msc.b / 1024, msc.a / 1024]);
                        }
                    }
                }
              } else {
                  concDurationData.push([jdate, d.p / 1000, tt]);
                  logConcDurationData.push([jdate, Math.log10(d.p / 1000), tt]);
              }
          } else if (typeof d.alr != 'undefined') {
            var jdate = this.toDateTz(moment.utc(d.d).tz(this.tz()));
            allocationRateData.push([jdate, d.alr / 1024]);
            promotionRateData.push([jdate, d.prr / 1024]);
          } else if (typeof d.stats != 'undefined') {
            stats = d;
          }
        }
    }.bind(this), function(err) {
        this.setState(update(this.state, {
            reload: {
                message: {
                    $set: GCPlotCore.ERRORS[r.error] + "(" + d.message + ")"
                }
            }
        }));
    }.bind(this), function() {
        if ((typeof firstTime == 'undefined') || firstTime == null) {
            firstTime = moment.tz(this.tz());
            lastTime = moment(firstTime);
        }

        if (pauseDurationData.length == 0) {
          pauseDurationData = [[this.toDateTz(moment()), null, '', null, '', null, '', null, '']];
          logPauseDurationData = pauseDurationData;
        }
        if (concDurationData.length == 0) {
          concDurationData = [[this.toDateTz(moment()), null, '']];
          logConcDurationData = concDurationData;
        }
        if (allocationRateData.length == 0) {
          promotionRateData = [[this.toDateTz(moment()), null]];
          allocationRateData = promotionRateData;
        }
        if (youngUsedBeforeData.length == 0) {
          youngUsedBeforeData = [[this.toDateTz(moment()), null, null]];
          youngUsedAfterData = youngUsedBeforeData;
          youngTotalData = youngUsedBeforeData;
        }
        if (heapUsedBeforeData.length == 0) {
          heapUsedBeforeData = [[this.toDateTz(moment()), null, null]];
          heapUsedAfterData = heapUsedBeforeData;
          heapTotalData = heapUsedBeforeData;
        }
        if (tenuredUsedBeforeData.length == 0) {
          tenuredUsedBeforeData = [[this.toDateTz(moment()), null, null, null]];
          tenuredUsedAfterData = tenuredUsedBeforeData;
          tenuredTotalData = tenuredUsedBeforeData;
        }
        if (metaspaceUsage.length == 0) {
          metaspaceUsage = [[this.toDateTz(moment()), null, null]];
        }
        this.setState(update(this.state, {
            pauseDurationData: {
                $set: pauseDurationData
            },
            logPauseDurationData: {
                $set: logPauseDurationData
            },
            concurrentDurationData: {
                $set: concDurationData
            },
            logConcurrentDurationData: {
                $set: logConcDurationData
            },
            promotionRateData: {
                $set: promotionRateData
            },
            allocationRateData: {
                $set: allocationRateData
            },
            youngUsedBeforeData: {
                $set: youngUsedBeforeData
            },
            youngUsedAfterData: {
                $set: youngUsedAfterData
            },
            youngTotalData: {
                $set: youngTotalData
            },
            heapUsedBeforeData: {
                $set: heapUsedBeforeData
            },
            heapUsedAfterData: {
                $set: heapUsedAfterData
            },
            heapTotalData: {
                $set: heapTotalData
            },
            tenuredUsedAfterData: {
                $set: tenuredUsedAfterData
            },
            tenuredTotalData: {
                $set: tenuredTotalData
            },
            metaspaceUsage: {
                $set: metaspaceUsage
            },
            stats: {
              $set: this.statsPostProcessing(stats)
            },
            pauseDurationRange: {
                from: {
                    $set: this.toDateTz(lastTime)
                },
                to: {
                    $set: this.toDateTz(firstTime)
                }
            },
            isLoading: {
                $set: false
            }
        }));
    }.bind(this));
    GCPlotCore.objectsAges(this.state.analyse_id, this.state.jvm_id, function(r) {
      var oas = [];
      var dss = -1;
      if (typeof r.dss != 'undefined' && r.dss > 0) {
        dss = r.dss;
      }
      for  (var i = 0; i < r.occupied.length; i++) {
        oas.push([r.occupied[i], r.total[i]]);
      }
      this.setState(update(this.state, {
        desiredSurvivorSize: {$set: dss},
        objectsAges: {$set: oas}
      }));
    }.bind(this), function(code, title, msg) {
      this.setState(update(this.state, {
        objectsAges: {$set: [["Error", title + " (" + msg + ")"]]}
      }));
    }.bind(this));
  }

  statsPostProcessing(stats) {
    if (stats == null || $.isEmptyObject(stats.generation_total)) {
      return null;
    }
    if (typeof stats.generation_total[GCPlotCore.TENURED_GEN_STR] == 'undefined') {
      var gty = stats.generation_total[GCPlotCore.YOUNG_GEN_STR];
      var gtt = stats.heap_total;
      // the min for young is actually is max for tenured
      stats.generation_total[GCPlotCore.TENURED_GEN_STR] = {
        min: Math.max(gtt.max - gty.max, 0),
        max: Math.max(gtt.min - gty.min, 0),
        avg: Math.max(gtt.avg - gty.avg, 0)
      };
    }
    if (typeof stats.generation_usage[GCPlotCore.TENURED_GEN_STR] == 'undefined') {
      var gty = stats.generation_usage[GCPlotCore.YOUNG_GEN_STR];
      var gtt = stats.heap_usage;
      stats.generation_usage[GCPlotCore.TENURED_GEN_STR] = {
        min: null,
        max: null,
        avg: Math.max(gtt.avg - gty.avg, 0)
      };
    }
    var totalAvgPie = [];
    var usedAvgPie = [];
    var pauseTimeBar = [];
    var pauseAvgBar = [];
    for (var gen_id in stats.generation_total) {
        if (stats.generation_total.hasOwnProperty(gen_id)) {
            var gen = stats.generation_total[gen_id];
            var name = GCPlotCore.generationName(gen_id);
            if (name != null) {
              totalAvgPie.push([name, gen.avg])
            }
        }
    }
    for (var gen_id in stats.generation_usage) {
        if (stats.generation_usage.hasOwnProperty(gen_id)) {
            var gen = stats.generation_usage[gen_id];
            var name = GCPlotCore.generationName(gen_id);
            if (name != null) {
              usedAvgPie.push([name, gen.avg])
            }
        }
    }
    for (var gen_id in stats.generation_stats) {
      if (stats.generation_stats.hasOwnProperty(gen_id)) {
          var gen = stats.generation_stats[gen_id];
          var name = GCPlotCore.generationName(gen_id);
          if (name != null && gen.pause_count > 0) {
              pauseTimeBar.push([name, gen.pause_time / 1000000]);
              pauseAvgBar.push([name, gen.avg_pause / 1000]);
          }
      }
    }
    if (stats.full_stats.pause_count > 0) {
      pauseTimeBar.push(['Full', stats.full_stats.pause_time / 1000000]);
      pauseAvgBar.push(['Full', stats.full_stats.avg_pause / 1000]);
    }
    if (totalAvgPie.length > 0) {
      this.state.totalAvgPie = totalAvgPie;
    }
    if (usedAvgPie.length > 0) {
      this.state.usedAvgPie = usedAvgPie;
    }
    if (pauseTimeBar.length > 0) {
      this.state.pauseTimeBar = pauseTimeBar;
    }
    if (pauseAvgBar.length > 0) {
      this.state.pauseAvgBar = pauseAvgBar;
    }
    return stats;
  }

  onDeleteJvmClick() {
    this.setState(update(this.state, {
      delete: {
        message: {$set: ""},
      }
    }));
    GCPlotCore.deleteJvm(this.props.params.analyseId, this.props.params.jvmId, function() {
      this.setState(update(this.state, { show: {$set: false}}))
      browserHistory.push("/dashboard");
    }.bind(this), function(code, title, msg) {
      this.setState(update(this.state, {
        delete: {
          message: {$set: title + " (" + msg + ")"},
        }
      }));
    }.bind(this));
  }

  render() {
    let close = () => this.setState(update(this.state, {
        show: {
            $set: false
        }
    }));
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    JVM Info
                    <small>
                        <span style={{
                            color: "#3c8dbc"
                        }}>{this.state.analyse.jvm_names[this.props.params.jvmId]}</span>
                        <span> from </span>{this.state.analyse.name}</small>
                </h1>
            </section>
            <section className="content">
                <Panel footer={< div > <Row>
                    <Col md={2}>
                        <Button type="button" bsStyle="default" disabled={this.state.isLoading} onClick={this.onReloadClick.bind(this)}>{(() => {
                                if (this.state.isLoading) {
                                    return <Spinner spinnerName="circle"/>
                                } else {
                                    return <div>Reload</div>
                                }
                            })()}</Button>
                    </Col>
                    <Col style={this.state.errorStyle} md={6}>
                        <div style={{
                            display: this.state.reload.message == ''
                                ? 'none'
                                : 'block'
                        }} className="callout callout-danger">
                            <p>{this.state.reload.message}</p>
                        </div>
                    </Col>
                </Row> < /div>}>
                    <Row>
                        <Col md={4}>
                            <p>
                                <b>Dates Range:</b>
                            </p>
                            <DatePicker selected={this.state.dateRangeState.startDate} selectsStart startDate={this.state.dateRangeState.startDate} endDate={this.state.dateRangeState.endDate} onChange={this.handleChangeStart.bind(this)}/>
                            <DatePicker selected={this.state.dateRangeState.endDate} selectsEnd startDate={this.state.dateRangeState.startDate} endDate={this.state.dateRangeState.endDate} onChange={this.handleChangeEnd.bind(this)}/>
                        </Col>
                        <Col md={5}>
                            <p>
                                <b>Times Range:</b>
                            </p>
                            <input type="checkbox" className="col-xs-1" value={this.state.dateRangeState.timeEnabled} onChange={this.onTimeChange.bind(this)}/>
                            <TimePicker disabled={!this.state.dateRangeState.timeEnabled} value={this.state.dateRangeState.startDate} onChange={this.handleChangeStart.bind(this)}/>
                            <TimePicker disabled={!this.state.dateRangeState.timeEnabled} value={this.state.dateRangeState.endDate} onChange={this.handleChangeEnd.bind(this)}/>
                        </Col>
                    </Row>
                </Panel>
                <Tabs defaultActiveKey={1}>
                    <Tab eventKey={1} title="General Stats">
                        <Row>
                            <Col md={12}>
                                <Panel header={<span> <I name="info"/> <span>Brief Info</span> </span>}>
                                    <dl>
                                        <dt>Name</dt>
                                        <dd>
                                            <code>{this.state.analyse.jvm_names[this.props.params.jvmId]}</code>
                                        </dd>
                                        <dt>First GC Event Occured</dt>
                                        {(() => {
                                            if (this.isFirstEventPresented()) {
                                                return <dd>{this.formattedTime("MMMM DD, YYYY (hh:mm:ss A)", this.firstEventMoment()) +
                                                    " - " + this.tz()}</dd>
                                            } else {
                                                return <dd>There is no info about the first GC Event observed.</dd>
                                            }
                                        })()}
                                        <dt>Last GC Event Time</dt>
                                        {(() => {
                                            if (this.isLastEventPresented()) {
                                                return <dd>{this.formattedTime("MMMM DD, YYYY (hh:mm:ss A)", this.lastEventMoment()) +
                                                    " - " + this.tz()}</dd>
                                            } else {
                                                return <dd>There is no info about the last GC Event observed.</dd>
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
                                <Panel header={<span> <I name="server"/> <span>Last Server Info</span> </span>}>
                                    {(() => {
                                        if (this.state.analyse.jvm_mem[this.props.params.jvmId]) {
                                            return (
                                                <dl>
                                                    <dt>Page Size</dt>
                                                    <dd>
                                                        <code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].ps)}</code>
                                                        <span>{" (" + this.state.analyse.jvm_mem[this.props.params.jvmId].ps + " bytes)"}</span></dd>
                                                    <dt>Physical Total</dt>
                                                      <dd>
                                                        <code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].pt)}</code>
                                                        <span>{" (" + this.state.analyse.jvm_mem[this.props.params.jvmId].pt + " bytes)"}</span>
                                                      </dd>
                                                    <dt>Physical Free</dt>
                                                    <dd>
                                                        <code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].pf)}</code>
                                                        <span>{" (" + this.state.analyse.jvm_mem[this.props.params.jvmId].pf + " bytes)"}</span></dd>
                                                    <dt>Physical Occupied</dt>
                                                    <dd>
                                                        <code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].pt - this.state.analyse.jvm_mem[this.props.params.jvmId].pf)}</code>
                                                        <span>{" (" + (this.state.analyse.jvm_mem[this.props.params.jvmId].pt - this.state.analyse.jvm_mem[this.props.params.jvmId].pf) + " bytes)"}</span></dd>
                                                    <dt>Swap Total</dt>
                                                    <dd>
                                                        <code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].st)}</code>
                                                        <span>{" (" + this.state.analyse.jvm_mem[this.props.params.jvmId].st + " bytes)"}</span></dd>
                                                    <dt>Swap Free</dt>
                                                    <dd>
                                                        <code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].sf)}</code>
                                                        <span>{" (" + this.state.analyse.jvm_mem[this.props.params.jvmId].sf + " bytes)"}</span></dd>
                                                    <dt>Swap Occupied</dt>
                                                    <dd>
                                                        <code>{GCPlotCore.humanFileSize(this.state.analyse.jvm_mem[this.props.params.jvmId].st - this.state.analyse.jvm_mem[this.props.params.jvmId].sf)}</code>
                                                        <span>{" (" + (this.state.analyse.jvm_mem[this.props.params.jvmId].st - this.state.analyse.jvm_mem[this.props.params.jvmId].sf) + " bytes)"}</span></dd>
                                                </dl>
                                            );
                                        } else {
                                            return <dd>No info recorded. Probably the file was truncated or corrupted.</dd>
                                        }
                                    })()}
                                </Panel>
                            </Col>
                            <Col md={6}>
                                <Panel header={<span> <I name="flag"/> <span>JVM Flags</span> </span>}>
                                    {(() => {
                                        if (this.state.analyse.jvm_hdrs[this.props.params.jvmId]) {
                                            return (
                                                <code>{this.state.analyse.jvm_hdrs[this.props.params.jvmId]}</code>
                                            );
                                        } else {
                                            return <dd>No info recorded. Probably the file was truncated or corrupted.</dd>
                                        }
                                    })()}
                                </Panel>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey={2} title="Pauses">
                        <Panel><Chart chartType="ScatterChart" options={{
            displayAnnotations: true,
            title: 'Pause Durations (Stop-The-World only)',
            tooltip: {
                isHtml: true
            },
            hAxis: this.hAxis(),
            vAxis: {
                title: 'GC Pause (milliseconds)'
            },
            series: {
                0: {
                    pointShape: 'circle'
                },
                1: {
                    pointShape: 'triangle'
                },
                2: {
                    pointShape: 'star'
                },
                3: {
                    pointShape: 'polygon'
                }
            }
        }} rows={this.state.pauseDurationData} columns={[
            {
                'type': 'datetime',
                'label': 'Time'
            }, {
                'type': 'number',
                'label': 'Young Pause'
            }, {
                'type': 'string',
                'role': 'tooltip',
                'p': {
                    'html': true
                }
            }, {
                'type': 'number',
                'label': 'Tenured Pause'
            }, {
                'type': 'string',
                'role': 'tooltip',
                'p': {
                    'html': true
                }
            }, {
                'type': 'number',
                'label': 'Metaspace/Perm Pause'
            }, {
                'type': 'string',
                'role': 'tooltip',
                'p': {
                    'html': true
                }
            }, {
                'type': 'number',
                'label': 'Full Pause (Young + Tenured + Metaspace/Perm)'
            }, {
                'type': 'string',
                'role': 'tooltip',
                'p': {
                    'html': true
                }
            }
        ]} graph_id="pdc" width="100%" height="400px" legend_toggle={false}/><Chart chartType="ScatterChart" options={{
            displayAnnotations: true,
            title: 'Log(x) Pause Durations (Stop-The-World only)',
            tooltip: {
                isHtml: true
            },
            hAxis: this.hAxis(),
            vAxis: {
                title: 'Log(GC_Pause)'
            },
            series: {
                0: {
                    pointShape: 'circle'
                },
                1: {
                    pointShape: 'triangle'
                },
                2: {
                    pointShape: 'star'
                },
                3: {
                    pointShape: 'polygon'
                }
            }
        }} rows={this.state.logPauseDurationData} columns={[
            {
                'type': 'datetime',
                'label': 'Time'
            }, {
                'type': 'number',
                'label': 'Young Pause'
            }, {
                'type': 'string',
                'role': 'tooltip',
                'p': {
                    'html': true
                }
            }, {
                'type': 'number',
                'label': 'Tenured Pause'
            }, {
                'type': 'string',
                'role': 'tooltip',
                'p': {
                    'html': true
                }
            }, {
                'type': 'number',
                'label': 'Metaspace/Perm Pause'
            }, {
                'type': 'string',
                'role': 'tooltip',
                'p': {
                    'html': true
                }
            }, {
                'type': 'number',
                'label': 'Full Pause (Young + Tenured + Metaspace/Perm)'
            }, {
                'type': 'string',
                'role': 'tooltip',
                'p': {
                    'html': true
                }
            }
        ]} graph_id="lpdc" width="100%" height="400px" legend_toggle={false}/>
                            <Chart chartType="ScatterChart" options={{
                                displayAnnotations: true,
                                title: 'Concurrent Pause Durations (Non-STW)',
                                tooltip: {
                                    isHtml: true
                                },
                                hAxis: this.hAxis(),
                                vAxis: {
                                    title: 'GC Duration (Milliseconds)'
                                },
                                series: {
                                    0: {
                                        pointShape: 'circle'
                                    }
                                }
                            }} rows={this.state.concurrentDurationData} columns={[
                                {
                                    'type': 'datetime',
                                    'label': 'Time'
                                }, {
                                    'type': 'number',
                                    'label': 'Concurrent Collections'
                                }, {
                                    'type': 'string',
                                    'role': 'tooltip',
                                    'p': {
                                        'html': true
                                    }
                                }
                            ]} graph_id="conc_events" width="100%" height="400px" legend_toggle={false}/>
                            <Chart chartType="ScatterChart" options={{
                                displayAnnotations: true,
                                title: 'Log(x) Concurrent Pause Durations (Non-STW)',
                                tooltip: {
                                    isHtml: true
                                },
                                hAxis: this.hAxis(),
                                vAxis: {
                                    title: 'Log(GC_Duration)'
                                },
                                series: {
                                    0: {
                                        pointShape: 'circle'
                                    }
                                }
                            }} rows={this.state.logConcurrentDurationData} columns={[
                                {
                                    'type': 'datetime',
                                    'label': 'Time'
                                }, {
                                    'type': 'number',
                                    'label': 'Concurrent Collections'
                                }, {
                                    'type': 'string',
                                    'role': 'tooltip',
                                    'p': {
                                        'html': true
                                    }
                                }
                            ]} graph_id="lconc_events" width="100%" height="400px" legend_toggle={false}/>
                        </Panel>
                    </Tab>
                    <Tab eventKey={3} title="Memory">
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Promotion Rate',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Promotion Rate (mb/sec)'
                            }
                        }} rows={this.state.promotionRateData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Promotion Rate'
                            }
                        ]} graph_id="prmc" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Allocation Rate',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Allocation Rate (mb/sec)'
                            }
                        }} rows={this.state.allocationRateData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Allocation Rate'
                            }
                        ]} graph_id="armc" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Young Generation Used Before GC',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Young Used Before (mb)'
                            }
                        }} rows={this.state.youngUsedBeforeData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Young Used Before'
                            }, {
                                'type': 'number',
                                'label': 'Young Used Before EMA'
                            }
                        ]} graph_id="yubc" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Young Generation Used After GC',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Young Used After (mb)'
                            }
                        }} rows={this.state.youngUsedAfterData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Young Used After'
                            }, {
                                'type': 'number',
                                'label': 'Young Used After EMA'
                            }
                        ]} graph_id="yuac" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Young Total Size',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Young Total (mb)'
                            }
                        }} rows={this.state.youngTotalData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Young Total'
                            }, {
                                'type': 'number',
                                'label': 'Young Total EMA'
                            }
                        ]} graph_id="yutc" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            annotations: {
                              stemColor: 'red'
                            },
                            colors: ['#3366CC', '#AAAA11'],
                            title: 'Tenured Used',
                            hAxis: this.hAxis(" | Tenured Occured (red lines)"),
                            vAxis: {
                                title: 'Tenured Used (mb)'
                            }
                        }} rows={this.state.tenuredUsedAfterData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {type: 'string', role: 'annotation'}, {
                                'type': 'number',
                                'label': 'Tenured Used'
                            }, {
                                'type': 'number',
                                'label': 'Tenured Used EMA'
                            }
                        ]} graph_id="tuac" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Tenured Total Size',
                            annotations: {
                              stemColor: 'red'
                            },
                            colors: ['#3366CC', '#AAAA11'],
                            hAxis: this.hAxis(" | Tenured Occured (red lines)"),
                            vAxis: {
                                title: 'Tenured Total (mb)'
                            }
                        }} rows={this.state.tenuredTotalData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {type: 'string', role: 'annotation'}, {
                                'type': 'number',
                                'label': 'Tenured Total'
                            }, {
                                'type': 'number',
                                'label': 'Tenured Total EMA'
                            }
                        ]} graph_id="tutc" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="ScatterChart" options={{
                            displayAnnotations: true,
                            title: 'Metaspace/Perm Used Before and After',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Used (mb)'
                            },
                            series: {
                                0: {
                                    pointShape: 'circle'
                                },
                                1: {
                                    pointShape: 'triangle'
                                }
                            }
                        }} rows={this.state.metaspaceUsage} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Used Before'
                            }, {
                                'type': 'number',
                                'label': 'Used After'
                            }
                        ]} graph_id="mutc" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Heap Used Before GC',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Heap Used Before (mb)'
                            }
                        }} rows={this.state.heapUsedBeforeData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Heap Used Before'
                            }, {
                                'type': 'number',
                                'label': 'Heap Used Before EMA'
                            }
                        ]} graph_id="hubc" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Heap Used After GC',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Heap Used After (mb)'
                            }
                        }} rows={this.state.heapUsedAfterData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Heap Used After'
                            }, {
                                'type': 'number',
                                'label': 'Heap Used After EMA'
                            }
                        ]} graph_id="huac" width="100%" height="400px" legend_toggle={false}/>
                        <Chart chartType="LineChart" options={{
                            displayAnnotations: true,
                            title: 'Heap Total Size',
                            hAxis: this.hAxis(),
                            vAxis: {
                                title: 'Heap Total (mb)'
                            }
                        }} rows={this.state.heapTotalData} columns={[
                            {
                                'type': 'datetime',
                                'label': 'Time'
                            }, {
                                'type': 'number',
                                'label': 'Heap Total'
                            }, {
                                'type': 'number',
                                'label': 'Heap Total EMA'
                            }
                        ]} graph_id="hutc" width="100%" height="400px" legend_toggle={false}/>
                    </Tab>
                    <Tab eventKey={4} title="Tenuring Stats">
                        <Panel header="Tenuring Ages Statistic">
                            {(() => {
                                if (this.state.desiredSurvivorSize > 0) {
                                    return <p>
                                        <b>Desired Survivor Size{" - "}</b>
                                        <code>{GCPlotCore.humanFileSize(this.state.desiredSurvivorSize)}</code>
                                    </p>;
                                } else {
                                    return <div/>;
                                }
                            })()}
                            <Row>
                                <Col md={8}>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th style={{width: '3%'}}>#</th>
                                                <th style={{width: '30%'}}>Occupied (bytes)</th>
                                                <th style={{width: '30%'}}>Total (bytes)</th>
                                                <th style={{width: '30%'}}>Occupation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(() => {
                                                return this.state.objectsAges.map(function(r, i) {
                                                    return <tr>
                                                        <td>{i + 1}</td>
                                                        <td>{r[0]}</td>
                                                        <td>{r[1]}</td>
                                                        <td>
                                                            <ProgressBar now={Number.isInteger(r[0])
                                                                ? (100 - ((r[1] - r[0] + 1) / r[1] * 100))
                                                                : 0} bsStyle="primary" className="progress-xs"/>
                                                        </td>
                                                    </tr>;
                                                });
                                            })()}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Panel>
                    </Tab>
                    <Tab eventKey={5} title="Generations">
                      <Row>
                        <Col md={12}>
                      <Panel header="Generations Total Sizes">
                          <Row>
                              <Col md={6}>
                                  <Table bordered>
                                      <thead>
                                          <tr>
                                              <th style={{width: '10%'}}>Generation</th>
                                              <th style={{width: '30%'}}>Average</th>
                                              <th style={{width: '30%'}}>Min</th>
                                              <th style={{width: '30%'}}>Max</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {(() => {
                                            var items = [];
                                            if (this.state.stats != null) {
                                              for (var gen_id in this.state.stats.generation_total) {
                                                  if (this.state.stats.generation_total.hasOwnProperty(gen_id)) {
                                                      var gen = this.state.stats.generation_total[gen_id];
                                                      var name = GCPlotCore.generationName(gen_id);
                                                      if (name != null) {
                                                        items.push(<tr>
                                                            <td>{name}</td>
                                                            <td><code>{GCPlotCore.humanFileSize(gen.avg * 1024)}</code></td>
                                                            <td><code>{GCPlotCore.humanFileSize(gen.min * 1024)}</code></td>
                                                            <td><code>{GCPlotCore.humanFileSize(gen.max * 1024)}</code></td>
                                                        </tr>);
                                                      }
                                                  }
                                              }
                                              items.push(<tr>
                                                  <td>Heap</td>
                                                  <td><code>{GCPlotCore.humanFileSize(this.state.stats.heap_total.avg * 1024)}</code></td>
                                                  <td><code>{GCPlotCore.humanFileSize(this.state.stats.heap_total.min * 1024)}</code></td>
                                                  <td><code>{GCPlotCore.humanFileSize(this.state.stats.heap_total.max * 1024)}</code></td>
                                              </tr>);
                                            }
                                            return items;
                                          })()}
                                      </tbody>
                                  </Table>
                              </Col>
                              <Col md={6}>
                                <Chart chartType="PieChart" options={{
                                    displayAnnotations: true,
                                    title: 'Average Total Size by Generation'
                                }} rows={this.state.totalAvgPie} columns={[
                                    {
                                        'type': 'string',
                                        'label': 'Generation'
                                    }, {
                                        'type': 'number',
                                        'label': 'Size'
                                    }
                                ]} graph_id="piet" width="100%" height="200px" legend_toggle={false}/>
                              </Col>
                          </Row>
                      </Panel>
                      <Panel header="Generations Used Memory">
                          <Row>
                              <Col md={6}>
                                  <Table bordered>
                                      <thead>
                                          <tr>
                                              <th style={{width: '10%'}}>Generation</th>
                                              <th style={{width: '30%'}}>Average</th>
                                              <th style={{width: '30%'}}>Min</th>
                                              <th style={{width: '30%'}}>Max</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {(() => {
                                            var items = [];
                                            if (this.state.stats != null) {
                                              for (var gen_id in this.state.stats.generation_usage) {
                                                  if (this.state.stats.generation_usage.hasOwnProperty(gen_id)) {
                                                      var gen = this.state.stats.generation_usage[gen_id];
                                                      var name = GCPlotCore.generationName(gen_id);
                                                      if (name != null) {
                                                        items.push(<tr>
                                                            <td>{name}</td>
                                                            <td><code>{GCPlotCore.humanFileSize(gen.avg * 1024)}</code></td>
                                                            <td><code>{gen.min == null ? "-" : GCPlotCore.humanFileSize(gen.min * 1024)}</code></td>
                                                            <td><code>{gen.max == null ? "-" : GCPlotCore.humanFileSize(gen.max * 1024)}</code></td>
                                                        </tr>);
                                                      }
                                                  }
                                              }
                                              items.push(<tr>
                                                  <td>Heap</td>
                                                  <td><code>{GCPlotCore.humanFileSize(this.state.stats.heap_usage.avg * 1024)}</code></td>
                                                  <td><code>{GCPlotCore.humanFileSize(this.state.stats.heap_usage.min * 1024)}</code></td>
                                                  <td><code>{GCPlotCore.humanFileSize(this.state.stats.heap_usage.max * 1024)}</code></td>
                                              </tr>);
                                            }
                                            return items;
                                          })()}
                                      </tbody>
                                  </Table>
                              </Col>
                              <Col md={6}>
                                <Chart chartType="PieChart" options={{
                                    displayAnnotations: true,
                                    title: 'Average Used Size by Generation'
                                }} rows={this.state.usedAvgPie} columns={[
                                    {
                                        'type': 'string',
                                        'label': 'Generation'
                                    }, {
                                        'type': 'number',
                                        'label': 'Size'
                                    }
                                ]} graph_id="pieu" width="100%" height="200px" legend_toggle={false}/>
                              </Col>
                          </Row>
                      </Panel>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Panel>
                        <Row>
                          <Col md={6}>
                    <Chart chartType="BarChart" options={{
                        displayAnnotations: true,
                        title: 'STW Total Pauses'
                    }} rows={this.state.pauseTimeBar} columns={[
                        {
                            'type': 'string',
                            'label': 'Generation'
                        }, {
                            'type': 'number',
                            'label': 'Pause (Seconds)'
                        }
                    ]} graph_id="stwieu" width="100%" height="300px" legend_toggle={false}/>
                  </Col>
                  <Col md={6}>
                    <Chart chartType="BarChart" options={{
                        displayAnnotations: true,
                        title: 'STW Avg Pause'
                    }} rows={this.state.pauseAvgBar} columns={[
                        {
                            'type': 'string',
                            'label': 'Generation'
                        }, {
                            'type': 'number',
                            'label': 'Pause (Millis)'
                        }
                    ]} graph_id="stwied" width="100%" height="300px" legend_toggle={false}/>
                  </Col>
                  </Row>
                    </Panel>
                    </Col>
                  </Row>
                      <Row>
                      {(() => {
                        var items = [];
                        if (this.state.stats != null) {
                          var young = this.state.stats.generation_stats[GCPlotCore.YOUNG_GEN_STR];
                          var tenured = this.state.stats.generation_stats[GCPlotCore.TENURED_GEN_STR];
                          var full = this.state.stats.full_stats;
                          var metaspace = this.state.stats.generation_stats[GCPlotCore.METASPACE_GEN_STR];
                          var perm = this.state.stats.generation_stats[GCPlotCore.PERM_GEN_STR];

                          items.push(<GenerationStats md={3} key={"g" + GCPlotCore.YOUNG_GEN_STR} stats={young} title={GCPlotCore.generationName(GCPlotCore.YOUNG_GEN_STR)} />)
                          if (typeof tenured != 'undefined' && tenured.pause_count != 0) {
                              items.push(<GenerationStats md={3} key={"g" + GCPlotCore.TENURED_GEN_STR} stats={tenured} title={GCPlotCore.generationName(GCPlotCore.TENURED_GEN_STR)} />)
                          }
                          if (typeof full != 'undefined' && full.pause_count != 0) {
                            items.push(<GenerationStats md={3} key={"gfull"} stats={full} title={"Full GC"} />)
                          }
                          if (typeof metaspace != 'undefined') {
                            items.push(<GenerationStats md={3} key={"g" + GCPlotCore.METASPACE_GEN_STR} stats={metaspace} title={GCPlotCore.generationName(GCPlotCore.METASPACE_GEN_STR)} />)
                          } else if (typeof perm != 'undefined') {
                            items.push(<GenerationStats md={3} key={"g" + GCPlotCore.PERM_GEN_STR} stats={perm} title={GCPlotCore.generationName(GCPlotCore.PERM_GEN_STR)} />)
                          }
                        }
                        return items;
                      })()}
                    </Row>
                      <Row>
                          <Col md={12}>
                            <div className="callout callout-info">
                              <h4>Tips</h4>
                              <p>Please note that this are <u>observed values for the given period</u>, hence they might be inconsistent with each other (Min/Max particulary). This solely depends on the input data.</p>
                            </div>
                          </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey={6} title="Phases">
                      <Row>
                        <Col md={12}>
                          {(() => {
                            var items = [];
                            if (this.state.stats != null) {
                              for (var phase_id in this.state.stats.phase_stats) {
                                  if (this.state.stats.phase_stats.hasOwnProperty(phase_id)) {
                                      var phase = this.state.stats.phase_stats[phase_id];
                                      var name = GCPlotCore.PHASES[phase_id];
                                      if (name != null) {
                                        items.push(<GenerationStats md={3} key={"p" + phase_id} stats={phase} title={name} />);
                                      }
                                  }
                              }
                            }
                            return items;
                          })()}
                        </Col>
                      </Row>
                      <Row>
                          <Col md={12}>
                            <div className="callout callout-info">
                              <p>Only <u>concurrent</u> phases from the OldGen collections are included.</p>
                            </div>
                          </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey={7} title="Objects">
                        <Row>
                            <Col md={10}>
                              <Panel>
                              <Table bordered>
                                  <thead>
                                      <tr>
                                          <th style={{width: '50%'}}>Name</th>
                                          <th style={{width: '50%'}}>Value</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {(() => {
                                        var items = [];
                                        if (this.state.stats != null) {
                                          items.push(<tr>
                                            <td>Promoted Total</td>
                                            <td><code>{GCPlotCore.humanFileSize(this.state.stats.promoted_total * 1024)}</code></td>
                                          </tr>);
                                          items.push(<tr>
                                            <td>Observed Promotion Rate (MB/Sec)</td>
                                            <td><code>{(this.state.stats.promotion_rate / 1024).toFixed(2)}</code></td>
                                          </tr>);
                                          items.push(<tr>
                                            <td>Allocated Total</td>
                                            <td><code>{GCPlotCore.humanFileSize(this.state.stats.allocated_total * 1024)}</code></td>
                                          </tr>);
                                          items.push(<tr>
                                            <td>Observed Allocation Rate (MB/Sec)</td>
                                            <td><code>{(this.state.stats.allocation_rate / 1024).toFixed(2)}</code></td>
                                          </tr>);
                                        }
                                        return items;
                                      })()}
                                  </tbody>
                                </Table>
                              </Panel>
                              <div className="callout callout-info">
                                <p>By <u>Observed</u> we understand an average of the rates we observe between the events, not just division of the total value on the whole interval in seconds. That said, the values are more realistic.</p>
                              </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey={8} title="Manage">
                        <Modal container={this} show={this.state.show} onHide={close}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirm Delete</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h4>Are you sure you want to delete this JVM?</h4>
                                <p>{this.state.delete.message}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button bsStyle="danger" onClick={this.onDeleteJvmClick.bind(this)}>Delete</Button>
                                <Button onClick={close}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                        <Input type="text" label="ID" value={this.props.params.jvmId} addonAfter={< I name = "clipboard" style = {{cursor: "pointer"}}onClick = {
                            this.copyIdClick.bind(this)
                        } />} disabled={true}/>
                        <Button className="btn btn-block btn-danger" style={{
                            color: "white"
                        }} onClick={() => this.setState(update(this.state, {
                            show: {
                                $set: true
                            }
                        }))}>Delete JVM</Button>
                    </Tab>
                </Tabs>
            </section>
        </div>
    );
}
}

JvmInfoPage.displayName = 'JvmInfoPage';

JvmInfoPage.defaultProps = {
};

export default JvmInfoPage;
