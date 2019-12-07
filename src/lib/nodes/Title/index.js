import React from 'react';
import { deserialize, serialize } from 'lib/nodes/Editor';
import Editor from './components/Editor';
import TitleIcon from '@material-ui/icons/Title';
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
  menu: <TitleIcon />,
  menuLabel: 'title',
  renderEditor: props => <Editor {...props} />,
  renderViewer: props => <Editor {...props} readOnly />,
  serialize: ({ value }) => ({ value: serialize(value) }),
  type: 'title'
};
