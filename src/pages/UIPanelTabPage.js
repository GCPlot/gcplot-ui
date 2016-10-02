'use strict';

import React from 'react';
import { Row, Col, Panel, Tabs, Tab } from 'react-bootstrap';

class UIPanelTabPage extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            General UI
            <small>Preview of UI elements</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">General</li>
          </ol>
        </section>

        <section className="content">
          <h2 className="page-header">Panels</h2>
          <Row>
            <Col md={6}>
              <h4>Various Panels</h4>
              <Panel>
                <h4>Panel body only</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel with Header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel with No Padding" className="panel-no-padding">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel with No Border" className="panel-no-border">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel with Footer" footer="Panel Footer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel footer="Panel Footer Only">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
            </Col>

            <Col md={6}>
              <h4>Contextual Panels</h4>
              <Panel header="Panel Default">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel Primary" bsStyle="primary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel Info" bsStyle="info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel Success" bsStyle="success">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel Danger" bsStyle="danger">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
              <Panel header="Panel Warning" bsStyle="warning">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in quam pharetra, commodo dolor sed, volutpat elit. Sed interdum mollis cursus. Suspendisse ullamcorper massa eget arcu egestas, at facilisis turpis pharetra. Duis elementum accumsan mi, in posuere ex ultricies vel. Suspendisse pharetra porttitor libero a commodo. Nulla lacinia tempus sem, at efficitur tellus vehicula ut. Aliquam ac tortor in metus pulvinar sagittis. In odio nulla, convallis non aliquam a, pulvinar in ligula.
              </Panel>
            </Col>
          </Row>
          <h2 className="page-header">Tabs</h2>
          <Row>
            <Col md={6}>
              <Panel className="panel-no-padding">
                <Tabs defaultActiveKey={2}>
                  <Tab eventKey={1} title="Tab 1">
                    <b>How to use:</b>
                    <p>Exactly like the original bootstrap tabs except you should use
                      the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my whole heart.
                    I am alone, and feel the charm of existence in this spot,
                    which was created for the bliss of souls like mine. I am so happy,
                    my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                    that I neglect my talents. I should be incapable of drawing a single stroke
                    at the present moment; and yet I feel that I never was a greater artist than now.
                  </Tab>
                  <Tab eventKey={2} title="Tab 2">
                    The European languages are members of the same family. Their separate existence is a myth.
                    For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                    in their grammar, their pronunciation and their most common words. Everyone realizes why a
                    new common language would be desirable: one could refuse to pay expensive translators. To
                    achieve this, it would be necessary to have uniform grammar, pronunciation and more common
                    words. If several languages coalesce, the grammar of the resulting language is more simple
                    and regular than that of the individual languages.
                  </Tab>
                  <Tab eventKey={3} title="Tab 3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Tab>
                </Tabs>
              </Panel>
            </Col>

            <Col md={6}>
              <Panel>
                <Tabs defaultActiveKey={2}>
                  <Tab eventKey={1} title="Tab 1">
                    <b>How to use:</b>
                    <p>Exactly like the original bootstrap tabs except you should use
                      the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my whole heart.
                    I am alone, and feel the charm of existence in this spot,
                    which was created for the bliss of souls like mine. I am so happy,
                    my dear friend, so absorbed in the exquisite sense of mere tranquil existence,
                    that I neglect my talents. I should be incapable of drawing a single stroke
                    at the present moment; and yet I feel that I never was a greater artist than now.
                  </Tab>
                  <Tab eventKey={2} title="Tab 2">
                    The European languages are members of the same family. Their separate existence is a myth.
                    For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ
                    in their grammar, their pronunciation and their most common words. Everyone realizes why a
                    new common language would be desirable: one could refuse to pay expensive translators. To
                    achieve this, it would be necessary to have uniform grammar, pronunciation and more common
                    words. If several languages coalesce, the grammar of the resulting language is more simple
                    and regular than that of the individual languages.
                  </Tab>
                  <Tab eventKey={3} title="Tab 3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Tab>
                </Tabs>
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

UIPanelTabPage.displayName = 'UIPanelTabPage';

UIPanelTabPage.defaultProps = {
};

export default UIPanelTabPage;
