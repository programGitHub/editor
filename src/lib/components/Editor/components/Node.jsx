import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EditorContext } from './Editor';
import NodeTransition from './NodeTransition';
import { SwitchTransition } from 'react-transition-group';

/**
 * Node
 */
const Node = ({ active, type, ...props }) => {
  const { plugins } = useContext(EditorContext);

  if (
    typeof plugins !== 'object' ||
    !Array.isArray(plugins) ||
    !plugins.some(({ type: pluginType }) => pluginType === type)
  ) {
    return null;
  }

  const pluginEntry = plugins.find(
    ({ type: pluginType }) => pluginType === type
  );

  if (!Object.hasOwnProperty.call(pluginEntry, 'plugin')) {
    return null;
  }

  const { plugin } = pluginEntry;

  if (active && !Object.hasOwnProperty.call(plugin, 'renderEditor')) {
    return null;
  }

  if (!Object.hasOwnProperty.call(plugin, 'renderViewer')) {
    return null;
  }

  const Editor = plugin.renderEditor,
    Viewer = plugin.renderViewer;

  return (
    <SwitchTransition>
      <NodeTransition key={active ? 'editor' : 'viewer'} in={!active}>
        {active ? <Editor {...props} /> : <Viewer {...props} />}
      </NodeTransition>
    </SwitchTransition>
  );
};

Node.defaultProps = {
  active: false
};

Node.propTypes = {
  active: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
};

export default Node;
