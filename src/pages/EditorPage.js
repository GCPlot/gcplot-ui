'use strict';

import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import Editor from '../components/Editor/Editor';

const editorStyle = {
  'font-size': '20px',
  'margin': '15px 15px'
};

class EditorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: `
      <h2>In order to use Medium Editor Drag text</h2>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee</p>
      `
    };
  }
  handleChange(text) {
    this.setState({
      text: text
    });
  }
  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Text Editors
            <small>Advanced form element</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li className="active">Editors</li>
          </ol>
        </section>

        <section className="content">
          <Row>
            <Col md={12}>
              <Panel header="Medium Editor" style={editorStyle}>
                <Editor
                  text={this.state.text}
                  onChange={this.handleChange}
                />
              </Panel>
            </Col>
          </Row>
        </section>
      </div>
    );
  }
}

EditorPage.displayName = 'EditorPage';

EditorPage.defaultProps = {
};

export default EditorPage;
