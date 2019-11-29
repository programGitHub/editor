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

const initialNodes = [
  {
    id: 2,
    value: Value.fromJSON({
      document: {
        nodes: [
          {
            nodes: [
              {
                object: 'text',
                text: 'Premier Paragraphe'
              }
            ],
            object: 'block',
            type: 'paragraph'
          }
        ]
      }
    }),
    type: 'paragraph'
  }
  // {
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
const Editor = ({ editable, onSave: onSaveProp }) => {
  const [preview, setPreview] = useState(true);
  const [
    state,
    reorder,
    add,
    remove,
    onActive,
    onNodeChange,
    onSave
  ] = useEditor(initialNodes);

  return (
    <Box>
      {editable && (
        <Toolbar
          onSave={() => {
            onSave(onSaveProp, state.nodes, plugins);
          }}
          preview={preview}
          setPreview={setPreview}
        />
      )}
      {(!editable || preview) && (
        <Viewer blocks={state.nodes} plugins={plugins} />
      )}
      <Box style={{ display: preview ? 'none' : 'block' }}>
        <DndProvider backend={HTML5Backend}>
          <EditorContext.Provider value={{ plugins }}>
            <Add onClick={add()} />
            <TransitionGroup>
              {state.nodes.map((node, i) => (
                <Transition key={node.id}>
                  <Cell
                    active={state.active === node.id}
                    id={node.id}
                    index={i}
                    move={reorder}
                    onActive={onActive(node.id)}
                    onCancel={onActive(null)}
                    onRemove={remove(node.id)}
                  >
                    <Node
                      {...node}
                      active={state.active === node.id}
                      onChange={onNodeChange(node.id)}
                    />
                  </Cell>
                  <Add onClick={add(i)} />
                </Transition>
              ))}
            </TransitionGroup>
          </EditorContext.Provider>
        </DndProvider>
      </Box>
    </Box>
  );
};

Editor.defaultProps = {
  editable: false
};

Editor.propTypes = {
  editable: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired
};

export default Editor;
