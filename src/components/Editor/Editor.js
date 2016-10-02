import React from 'react';
import MediumEditor from 'react-medium-editor';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

class Editor extends React.Component {
  render() {
    return (
      <MediumEditor className="editor" {...this.props} style={{outline: 'none'}} />
    );
  }
}

Editor.displayName = 'Editor';

Editor.defaultProps = {
};

export default Editor;
