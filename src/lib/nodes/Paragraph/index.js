import React from 'react';
import { deserialize, serialize } from 'lib/nodes/Editor';
import Editor from './components/Editor';
import NotesIcon from '@material-ui/icons/Notes';
import { Value } from 'slate';

export default {
  defaultProps: {
    value: Value.fromJSON({
      document: {
        nodes: [
          {
            nodes: [
              {
                object: 'text',
                text: 'New Text'
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
  menu: <NotesIcon />,
  menuLabel: 'paragraph',
  renderEditor: props => <Editor {...props} />,
  renderViewer: props => <Editor {...props} readOnly />,
  serialize: ({ value }) => ({ value: serialize(value) }),
  type: 'paragraph'
};
