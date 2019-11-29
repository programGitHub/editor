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
  menu: <PhotoIcon />,
  menuLabel: 'image',
  renderEditor: props => <Editor {...props} />,
  renderViewer: props => <Viewer {...props} />,
  serialize,
  type: 'image'
};
