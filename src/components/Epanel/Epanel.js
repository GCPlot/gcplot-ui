'use strict';

import React from 'react';
import I from 'react-fontawesome';
import { Panel, Button } from 'react-bootstrap';

class Epanel extends React.Component {
  render() {
    const props = this.props;
    const setHeader = () => {
      if (props.btn) {
        return (
          <div>
            <div className="panel-heading-btn pull-right">
              <Button bsStyle="default" bsSize="xs" className="btn-circle">
                <I name="expand"></I>
              </Button>
              <Button bsStyle="success" bsSize="xs" className="btn-circle">
                <I name="repeat"></I>
              </Button>
              <Button bsStyle="warning" bsSize="xs" className="btn-circle">
                <I name="minus"></I>
              </Button>
              <Button bsStyle="danger" bsSize="xs" className="btn-circle">
                <I name="times"></I>
              </Button>
            </div>
            <h4 className="panel-title">{ props.header }</h4>
          </div>
        );
      }

      return (<h4 className="panel-title">{ props.header }</h4>);
    };

    return (
      <Panel bsStyle="primary" header={ setHeader() } footer={ props.footer }>
        { props.children }
      </Panel>
    );
  }
}

Epanel.displayName = 'Epanels';
Epanel.defaultProps = {
  btn: true,
};
Epanel.propTypes = {
};

export default Epanel;
