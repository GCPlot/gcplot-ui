'use strict';

import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import I from 'react-fontawesome';
import StatWidget from '../components/Widget/StatWidget';
import ProfileWidget from '../components/Widget/ProfileWidget';
import UserList from '../components/UserList/UserList';
import ProductList from '../components/ProductList/ProductList';
import Chat from '../components/Chat/Chat';


class WidgetPage extends React.Component {
  render() {
    const profileWidgets = () => {
      return (
        <Row>
          <Col md={4}>
            <ProfileWidget
              bgImg="img/photo1.png"
              user={{
                avatar: 'img/user1-128x128.jpg',
                name: 'John Doe',
                desc: 'CEO'
              }} />
          </Col>
          <Col md={4}>
            <ProfileWidget
              bgImg="img/photo2.png"
              user={{
                avatar: 'img/user3-128x128.jpg',
                name: 'Christina',
                desc: 'Product Manager'
              }} />
          </Col>
          <Col md={4}>
            <ProfileWidget
              bgImg="img/photo4.jpg"
              user={{
                avatar: 'img/user4-128x128.jpg',
                name: 'Amelia',
                desc: 'Assistent'
              }} />
          </Col>
        </Row>
      );
    };

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1 className="content-title">
            Widgets
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><I name="dashboard" /> Home</a></li>
            <li className="active">Widgets</li>
          </ol>
        </section>
        <section className="content">
          {profileWidgets()}

          <Row>
            <Col md={4}>
              <Panel header="Recently Registered Users">
                <UserList />
              </Panel>
            </Col>
            <Col md={4}>
              <Panel header="Chats">
                <Chat />
              </Panel>
            </Col>
            <Col md={4}>
              <Panel header="Recently Added Products">
                <ProductList />
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="chrome" title="Chrome" number="1,410" iconBg="red" />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="firefox" title="Firefox" number="1,410" iconBg="orange" />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="safari" title="Safari" number="1,410" iconBg="green" />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="internet-explorer" title="Internet Explorer" number="1,410" iconBg="light-blue" />
            </Col>
          </Row>

          <Row>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="chrome" title="Chrome" number="1,410" bg="red" />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="firefox" title="Firefox" number="1,410" bg="orange" />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="safari" title="Safari" number="1,410" bg="green" />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="internet-explorer" title="Internet Explorer" number="1,410" bg="light-blue" />
            </Col>
          </Row>

          <Row>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="chrome" title="Chrome" number="1,410" bg="red" progress={{size: 50, desc: 'description'}} />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="firefox" title="Firefox" number="1,410" bg="orange" progress={{size: 50, desc: 'description'}} />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="safari" title="Safari" number="1,410" bg="green" progress={{size: 50, desc: 'description'}} />
            </Col>
            <Col md={3} sm={6} xs={12}>
              <StatWidget icon="internet-explorer" title="Internet Explorer" number="1,410" bg="light-blue" progress={{size: 50, desc: 'description'}} />
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

WidgetPage.displayName = 'WidgetPage';

WidgetPage.defaultProps = {
};

export default WidgetPage;
