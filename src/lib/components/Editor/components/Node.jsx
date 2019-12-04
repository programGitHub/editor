import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EditorContext } from './Editor';

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
    <>
      {!active && <Viewer {...props} />}
      <div style={{ display: active ? 'block' : 'none' }}>
        <Editor {...props} />
      </div>
    </>
  );

  // return (
  //   <>
  //     <div style={{ display: active ? 'block' : 'none' }}>
  //       <Editor {...props} />
  //     </div>
  //     <div tabIndex="-1" style={{ display: !active ? 'block' : 'none' }}>
  //       <Viewer {...props} />
  //     </div>
  //   </>
  // );
};

Node.defaultProps = {
  active: false
};

Node.propTypes = {
  active: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired
};

export default Node;
