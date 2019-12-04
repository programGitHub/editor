import React from 'react';
import PropTypes from 'prop-types';
import Add from './Add';
import Cell from 'lib/components/Cell';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Node from './Node';
import Transition from './Transition';
import { TransitionGroup } from 'react-transition-group';
import useEditor from '../hooks/useEditor';

export const EditorContext = React.createContext({ plugins: [] });

/**
 * Editor
 */
const Editor = ({ onChange, plugins, value }) => {
  const [active, reorder, add, remove, onActive, onNodeChange] = useEditor(
    onChange,
    value
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <EditorContext.Provider value={{ plugins }}>
        <Add onClick={add()} />
        <TransitionGroup>
          {value.map((node, i) => (
            <Transition key={node.id}>
              <Cell
                active={active === node.id}
                id={node.id}
                index={i}
                move={reorder}
                onActive={onActive(node.id)}
                onCancel={onActive(null)}
                onRemove={remove(node.id)}
              >
                <Node
                  {...node}
                  active={active === node.id}
                  onChange={onNodeChange(node.id)}
                />
              </Cell>
              <Add onClick={add(i)} />
            </Transition>
          ))}
        </TransitionGroup>
      </EditorContext.Provider>
    </DndProvider>
  );
};

Editor.defaultProps = {
  plugins: {}
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  plugins: PropTypes.arrayOf(
    PropTypes.shape({
      plugin: PropTypes.object.isRequired,
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Editor;
