'use strict';

import React from 'react';
import { Row, Col, Panel, Input, ButtonInput, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import GCPlotCore from '../../core';

var prettyMs = require('pretty-ms');

class GenerationStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: props.stats
    };
  }

  render() {
    return <Col md={this.props.md}>
      <Panel header={<div>{this.props.title}</div>}>
      <dl>
        {(() => {
          var elems = [];
          if (this.state.stats.gc_amount > 0) {
            elems.push(<dt>Collections Count</dt>);
            elems.push(<dd><code>{this.state.stats.gc_amount}</code></dd>);
          }
          if (this.state.stats.freed_memory > 0) {
            elems.push(<dt>Freed Memory during GC</dt>);
            elems.push(<dd><code>{GCPlotCore.humanFileSize(this.state.stats.freed_memory * 1024)}</code></dd>);
          }
          if (this.state.stats.pause_time > 0) {
            elems.push(<dt>Total {this.props.duration ? 'Duration' : 'Pause'} Time</dt>);
            elems.push(<dd><code>{prettyMs(this.state.stats.pause_time / 1000, {verbose: true})}</code></dd>);
          }
          if (this.state.stats.min_pause > 0) {
            elems.push(<dt>Min {this.props.duration ? 'Duration' : 'Pause'} Time</dt>);
            elems.push(<dd><code>{prettyMs(this.state.stats.min_pause / 1000, {verbose: true})}</code></dd>);
          }
          if (this.state.stats.max_pause > 0) {
            elems.push(<dt>Max {this.props.duration ? 'Duration' : 'Pause'} Time</dt>);
            elems.push(<dd><code>{prettyMs(this.state.stats.max_pause / 1000, {verbose: true})}</code></dd>);
          }
          if (this.state.stats.avg_pause > 1) {
            elems.push(<dt>Avg {this.props.duration ? 'Duration' : 'Pause'} Time</dt>);
            elems.push(<dd><code>{prettyMs(this.state.stats.avg_pause / 1000, {verbose: true})}</code></dd>);
          }
          if (this.state.stats.min_interval > 0) {
            elems.push(<dt>Min Interval Between Events</dt>);
            elems.push(<dd><code>{prettyMs(this.state.stats.min_interval, {verbose: true})}</code></dd>);
          }
          if (this.state.stats.max_interval > 0) {
            elems.push(<dt>Max Interval Between Events</dt>);
            elems.push(<dd><code>{prettyMs(this.state.stats.max_interval, {verbose: true})}</code></dd>);
          }
          if (this.state.stats.avg_interval > 1) {
            elems.push(<dt>Avg Interval Between Events</dt>);
            elems.push(<dd><code>{prettyMs(this.state.stats.avg_interval, {verbose: true})}</code></dd>);
          }
          return elems;
        })()}
      </dl>
      </Panel>
    </Col>;
  }

}

GenerationStats.defaultProps = {
};

export default GenerationStats;
