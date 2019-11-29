import React from 'react';
import PropTypes from 'prop-types';
import useEditorContext from '../hooks/useEditorContext';

/**
 * Node
 */
const Node = ({ active, type, ...props }) => {
  const { plugins } = useEditorContext();

  if (
    typeof plugins !== 'object' ||
    !Object.hasOwnProperty.call(plugins, type)
  ) {
    return null;
  }

  if (active && !Object.hasOwnProperty.call(plugins[type], 'renderEditor')) {
    return null;
  }

  if (!Object.hasOwnProperty.call(plugins[type], 'renderViewer')) {
    return null;
  }

  const Editor = plugins[type].renderEditor,
    Viewer = plugins[type].renderViewer;

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
