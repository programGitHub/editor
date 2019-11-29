import { useCallback, useReducer } from 'react';

function createInitialState(initialNodes) {
  return {
    active: null,
    nodes: [...initialNodes]
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'active':
      return {
        ...state,
        active: action.active
      };

    case 'nodes':
      return {
        ...state,
        nodes: action.nodes
      };

    default:
      return {
        ...state
      };
  }
}

export default function useEditor(initialNodes = []) {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(initialNodes)
  );

  const add = useCallback(
    index => nodeProps => () => {
      const nodes = [...state.nodes],
        id = nodes.reduce((stack, curr) => Math.max(stack, curr.id), 0) + 1,
        node = {
          ...nodeProps,
          id
        };

      if (typeof index !== 'undefined') {
        nodes.splice(index + 1, 0, node);
      } else {
        nodes.unshift(node);
      }

      dispatch({
        nodes,
        type: 'nodes'
      });
    },
    [state.nodes]
  );

  const handleActive = id => () => {
    dispatch({
      active: id,
      type: 'active'
    });
  };

  const handleNodeChange = id => value => {
    const nodes = state.nodes.map(node => {
      if (node.id !== id) {
        return node;
      }

      return {
        ...node,
        ...value
      };
    });

    dispatch({
      nodes,
      type: 'nodes'
    });
  };

  const handleSave = (cb, nodes, plugins) => {
    const result = nodes.map(node => {
      if (!Object.hasOwnProperty.call(node, 'type')) {
        throw new Error('node type not found');
      }

      if (!Object.hasOwnProperty.call(plugins, node.type)) {
        throw new Error(`plugin ${node.type} not found`);
      }

      return plugins[node.type].serialize(node);
    });

    cb(result);
  };

  const remove = useCallback(
    id => () => {
      const nodes = [...state.nodes.filter(e => e.id !== id)];

      dispatch({
        nodes,
        type: 'nodes'
      });
    },
    [state.nodes]
  );

  const reorder = useCallback(
    (dragIndex, hoverIndex) => {
      const nodes = [...state.nodes],
        dragNode = nodes[dragIndex],
        dropNode = nodes[hoverIndex];

      nodes[hoverIndex] = dragNode;
      nodes[dragIndex] = dropNode;

      dispatch({
        nodes,
        type: 'nodes'
      });
    },
    [state.nodes]
  );

  return [
    state,
    reorder,
    add,
    remove,
    handleActive,
    handleNodeChange,
    handleSave
  ];
}
