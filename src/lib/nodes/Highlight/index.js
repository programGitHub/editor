import React from 'react';
import colors from './colors';
import { deserialize, serialize } from 'lib/nodes/Editor';
import Editor from './components/Editor';
import HighlightIcon from '@material-ui/icons/Highlight';
// import { Value } from 'slate';

export default {
  defaultProps: {
    color: colors.DEFAULT
    // value: Value.fromJSON({
    //   document: {
    //     nodes: [
    //       {
    //         nodes: [
    //           {
    //             object: 'text',
    //             text: 'New Highlight'
    //           }
    //         ],
    //         object: 'block',
    //         type: 'paragraph'
    //       }
    //     ]
    //   }
    // })
  },
  deserialize: ({ color, value }) => ({ color, value: deserialize(value) }),
  menu: <HighlightIcon />,
  menuLabel: 'highlight',
  renderEditor: props => <Editor {...props} />,
  renderViewer: props => <Editor {...props} readOnly />,
  serialize: ({ color, value }) => ({ color, value: serialize(value) }),
  type: 'highlight'
};
