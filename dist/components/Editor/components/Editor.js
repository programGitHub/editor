function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Add from './Add';
import Box from '@material-ui/core/Box';
import Cell from 'lib/components/Cell';
import { DndProvider } from 'react-dnd';
import EditorContext from '../context';
import highlight from 'lib/nodes/Highlight';
import HTML5Backend from 'react-dnd-html5-backend';
import image from 'lib/nodes/Image';
import Node from './Node';
import paragraph from 'lib/nodes/Paragraph';
import Toolbar from './Toolbar';
import Transition from './Transition';
import { TransitionGroup } from 'react-transition-group';
import useEditor from '../hooks/useEditor';
import { Value } from 'slate';
import Viewer from 'lib/components/Viewer';
const initialNodes = [{
  id: 2,
  value: Value.fromJSON({
    document: {
      nodes: [{
        nodes: [{
          object: 'text',
          text: 'Premier Paragraphe'
        }],
        object: 'block',
        type: 'paragraph'
      }]
    }
  }),
  type: 'paragraph'
} // {
//   id: 1,
//   src:
//     'https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/14/thumb_bigger_formation-node-js.png',
//   type: 'image'
// }
];
const plugins = {
  paragraph,
  highlight,
  image
};
/**
 * Editor
 */

const Editor = ({
  editable,
  onSave: onSaveProp
}) => {
  const [preview, setPreview] = useState(true);
  const [state, reorder, add, remove, onActive, onNodeChange, onSave] = useEditor(initialNodes);
  return React.createElement(Box, null, editable && React.createElement(Toolbar, {
    onSave: () => {
      onSave(onSaveProp, state.nodes, plugins);
    },
    preview: preview,
    setPreview: setPreview
  }), (!editable || preview) && React.createElement(Viewer, {
    blocks: state.nodes,
    plugins: plugins
  }), React.createElement(Box, {
    style: {
      display: preview ? 'none' : 'block'
    }
  }, React.createElement(DndProvider, {
    backend: HTML5Backend
  }, React.createElement(EditorContext.Provider, {
    value: {
      plugins
    }
  }, React.createElement(Add, {
    onClick: add()
  }), React.createElement(TransitionGroup, null, state.nodes.map((node, i) => React.createElement(Transition, {
    key: node.id
  }, React.createElement(Cell, {
    active: state.active === node.id,
    id: node.id,
    index: i,
    move: reorder,
    onActive: onActive(node.id),
    onCancel: onActive(null),
    onRemove: remove(node.id)
  }, React.createElement(Node, _extends({}, node, {
    active: state.active === node.id,
    onChange: onNodeChange(node.id)
  }))), React.createElement(Add, {
    onClick: add(i)
  }))))))));
};

Editor.defaultProps = {
  editable: false
};
Editor.propTypes = {
  editable: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired
};
export default Editor;