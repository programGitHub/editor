import React from 'react';
import { deserialize, serialize } from 'lib/nodes/Editor';
import Editor from './components/Editor';
import ListIcon from '@material-ui/icons/List';
import { Value } from 'slate';

export default {
  defaultProps: {
    linked: false,
    numbered: false,
    value: Value.fromJSON({
      document: {
        nodes: [
          {
            nodes: [
              {
                object: 'text',
                text: ''
              }
            ],
            object: 'block',
            type: 'paragraph'
          }
        ]
      }
    })
  },
  deserialize: ({ value }) => ({ value: deserialize(value) }),
  menu: <ListIcon />,
  menuLabel: 'list',
  renderEditor: props => <Editor {...props} />,
  renderViewer: props => <Editor {...props} readOnly />,
  serialize: ({ value }) => ({ value: serialize(value) }),
  type: 'list'
};
