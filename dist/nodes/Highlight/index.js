function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { deserialize, serialize } from '../Editor';
import Editor from './components/Editor';
import HighlightIcon from '@material-ui/icons/Highlight';
import { Value } from 'slate';
export default {
  defaultProps: {
    value: Value.fromJSON({
      document: {
        nodes: [{
          nodes: [{
            object: 'text',
            text: 'New Highlight'
          }],
          object: 'block',
          type: 'paragraph'
        }]
      }
    })
  },
  deserialize: ({
    color,
    value
  }) => ({
    color,
    value: deserialize(value)
  }),
  menu: React.createElement(HighlightIcon, null),
  menuLabel: 'highlight',
  renderEditor: props => React.createElement(Editor, props),
  renderViewer: props => React.createElement(Editor, _extends({}, props, {
    readOnly: true
  })),
  serialize: ({
    color,
    value
  }) => ({
    color,
    value: serialize(value)
  }),
  type: 'highlight'
};