function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Add from './Add';
import Cell from '../../Cell';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Node from './Node';
import Transition from './Transition';
import { TransitionGroup } from 'react-transition-group';
import useEditor from '../hooks/useEditor';
export const EditorContext = React.createContext({
  plugins: []
});
/**
 * Editor
 */

const Editor = ({
  onChange,
  plugins,
  value
}) => {
  const [active, reorder, add, remove, onActive, onNodeChange] = useEditor(onChange, value);
  return React.createElement(DndProvider, {
    backend: HTML5Backend
  }, React.createElement(EditorContext.Provider, {
    value: {
      plugins
    }
  }, React.createElement(Add, {
    onClick: add()
  }), React.createElement(TransitionGroup, null, value.map((node, i) => React.createElement(Transition, {
    key: node.id
  }, React.createElement(Cell, {
    active: active === node.id,
    id: node.id,
    index: i,
    move: reorder,
    onActive: onActive(node.id),
    onCancel: onActive(null),
    onRemove: remove(node.id)
  }, React.createElement(Node, _extends({}, node, {
    active: active === node.id,
    onChange: onNodeChange(node.id)
  }))), React.createElement(Add, {
    onClick: add(i)
  }))))));
};

Editor.defaultProps = {
  plugins: {}
};
Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  plugins: PropTypes.arrayOf(PropTypes.shape({
    plugin: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired,
  value: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired
  })).isRequired
};
export default Editor;