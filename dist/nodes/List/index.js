function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { deserialize, serialize } from '../Editor';
import Editor from './components/Editor';
import ListIcon from '@material-ui/icons/List';
import { Value } from 'slate';
export default {
  defaultProps: {
    linked: false,
    numbered: false,
    value: Value.fromJSON({
      document: {
        nodes: [{
          nodes: [{
            object: 'text',
            text: ''
          }],
          object: 'block',
          type: 'paragraph'
        }]
      }
    })
  },
  deserialize: ({
    value
  }) => ({
    value: deserialize(value)
  }),
  menu: React.createElement(ListIcon, null),
  menuLabel: 'list',
  renderEditor: props => React.createElement(Editor, props),
  renderViewer: props => React.createElement(Editor, _extends({}, props, {
    readOnly: true
  })),
  serialize: ({
    value
  }) => ({
    value: serialize(value)
  }),
  type: 'list'
};