import React from 'react';
import deserialize from './deserialize';
import Editor from './components/Editor';
import PhotoIcon from '@material-ui/icons/Photo';
import serialize from './serialize';
import Viewer from './components/Viewer';
export default {
  defaultProps: {
    src: ''
  },
  deserialize,
  menu: React.createElement(PhotoIcon, null),
  menuLabel: 'image',
  renderEditor: props => React.createElement(Editor, props),
  renderViewer: props => React.createElement(Viewer, props),
  serialize,
  type: 'image'
};