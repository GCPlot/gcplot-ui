'use strict';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import cn from 'classnames';

class ProfileWidget extends React.Component {
  render() {
    const footers = this.props.footers.map((footer, index) => {
      return (
        <Col key={index} sm={ 12 / this.props.footers.length } className={cn({'border-right': (index !== this.props.footers.length - 1)})}>
          <div className="description-block">
            <h5 className="description-header">{ footer.title }</h5>
            <span className="description-text">{ footer.desc }</span>
          </div>
        </Col>
      );
    });
    return (
      <div className="panel-body widget-user">
        <div className="widget-user-header bg-black" style={{background: `url('${this.props.bgImg}') center center`}}>
          <h3 className="widget-user-username">{ this.props.user.name }</h3>
          <h5 className="widget-user-desc">{ this.props.user.desc }</h5>
        </div>
        <div className="widget-user-image">
          <img className="img-circle" src={ this.props.user.avatar } alt="User Avatar" />
        </div>
        <div className="widget-user-footer">
          <Row>
            { footers }
          </Row>
        </div>
      </div>
    );
  }
}

ProfileWidget.displayName = 'ProfileWidget';
ProfileWidget.defaultProps = {
  bgImg: '../../img/photo1.png',
  user: {
    avatar: '../../img/user3-128x128.jpg',
    name: 'Username',
    desc: 'Description'
  },
  footers: [
    { title: <a href="#">Title1</a>, desc: 'DESC' },
    { title: 'Title2', desc: 'DESC' },
    { title: 'Title3', desc: 'DESC' },
    { title: 'Title4', desc: 'DESC' }
  ]
};
ProfileWidget.propTypes = {
};

export default ProfileWidget;
