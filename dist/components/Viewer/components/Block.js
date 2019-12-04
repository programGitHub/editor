import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { ViewerContext } from './Viewer';
/**
 * Block
 */

const Block = ({
  type,
  ...props
}) => {
  const plugins = useContext(ViewerContext);

  if (typeof plugins !== 'object' || !Array.isArray(plugins) || !plugins.some(({
    type: pluginType
  }) => pluginType === type)) {
    return null;
  }

  const pluginEntry = plugins.find(({
    type: pluginType
  }) => pluginType === type);

  if (!Object.hasOwnProperty.call(pluginEntry, 'plugin')) {
    return null;
  }

  const {
    plugin
  } = pluginEntry;

  if (!Object.hasOwnProperty.call(plugin, 'renderViewer')) {
    return null;
  }

  const Viewer = plugin.renderViewer;
  return React.createElement(Box, {
    marginBottom: 2,
    marginTop: 2
  }, React.createElement(Viewer, props));
};

Block.propTypes = {
  type: PropTypes.string.isRequired
};
export default Block;