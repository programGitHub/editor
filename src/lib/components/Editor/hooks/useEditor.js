import { useCallback, useState } from 'react';
import shortid from 'shortid';

/**
 * addNode
 *
 * @param {Function} cb
 * @param {Array} currentNodes
 */
function addNode(cb, currentNodes) {
  return function(index) {
    return function(nodeProps) {
      return function() {
        const nodes = [...currentNodes],
          id = shortid.generate(),
          node = {
            ...nodeProps,
            id
          };

        if (typeof index === 'number') {
          nodes.splice(index + 1, 0, node);
        } else {
          nodes.unshift(node);
        }

        cb(nodes);
      };
    };
  };
}

/**
 * updateNode
 *
 * @param {Function} cb
 * @param {Array} currentNodes
 */
function updateNode(cb, currentNodes) {
  return function(id) {
    return function(value) {
      const nodes = currentNodes.map(node => {
        if (node.id !== id) {
          return node;
        }

        return {
          ...node,
          ...value
        };
      });

      cb(nodes);
    };
  };
}

/**
 * removeNode
 *
 * @param {Function} cb
 * @param {Array} currentNodes
 */
function removeNode(cb, currentNodes) {
  return function(id) {
    return function() {
      const nodes = [...currentNodes.filter(e => e.id !== id)];
      cb(nodes);
    };
  };
}

/**
 * reorder
 *
 * @param {Function} cb
 * @param {Array} currentNodes
 */
function reorderNodes(cb, currentNodes) {
  return function(dragIndex, hoverIndex) {
    const nodes = [...currentNodes],
      dragNode = nodes[dragIndex],
      dropNode = nodes[hoverIndex];

    nodes[hoverIndex] = dragNode;
    nodes[dragIndex] = dropNode;

    cb(nodes);
  };
}

export default function useEditor(
  onChange,
  currentNodes,
  initialActiveState = null
) {
  /**
   * Active Node
   */
  const [active, setActive] = useState(initialActiveState);

  const handleActive = (id = null) => () => {
    setActive(id);
  };

  /**
   * Nodes List
   */
  const add = useCallback(addNode(onChange, currentNodes), [currentNodes]);
  const remove = useCallback(removeNode(onChange, currentNodes), [
    currentNodes
  ]);
  const reorder = useCallback(reorderNodes(onChange, currentNodes), [
    currentNodes
  ]);
  const update = useCallback(updateNode(onChange, currentNodes), [
    currentNodes
  ]);

  return [active, reorder, add, remove, handleActive, update];
}
