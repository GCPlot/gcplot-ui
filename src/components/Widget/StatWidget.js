'use strict';

import React from 'react';
import I from 'react-fontawesome';
import cn from 'classnames';

class StatWidget extends React.Component {
  hasProgressProp() {
    return this.props.progress && true || false;
  }

  render() {
    const props = this.props;
    return (
      <div className={ cn('widget', { [`bg-${this.props.bg}`]: true })}>
        <span className={ cn('widget-icon', {[`bg-${this.props.iconBg}`]: true}) }>
          <I name={ props.icon } />
        </span>
        <div className="widget-content">
          <span className="widget-text">{ props.title }</span>
          <span className="widget-number">{ props.number }</span>
          { this.hasProgressProp()
            &&
            <div className="progress">
              <div className="progress-bar" style={{ width: `${props.progress.size}%` }}></div>
            </div>
          }
          { this.hasProgressProp()
            &&
            <span className="progress-description">
              { props.progress.desc }
            </span>
          }
        </div>
      </div>
    );
  }
}

StatWidget.displayName = 'StatWidgets';
StatWidget.defaultProps = {
  title: 'Title',
  number: ''
};
StatWidget.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  number: React.PropTypes.string,
  bg: React.PropTypes.string
};

export default StatWidget;
