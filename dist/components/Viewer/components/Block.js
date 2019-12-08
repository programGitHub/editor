function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { ViewerContext } from './Viewer';
/**
 * Block
 */

const Block = ({
  renderer,
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

  const Viewer = plugin.renderViewer,
        Renderer = renderer;
  return React.createElement(Renderer, null, React.createElement(Viewer, props));
};

Block.defaultProps = {
  renderer: props => React.createElement(Box, _extends({}, props, {
    marginBottom: 2,
    marginTop: 2
  }))
};
Block.propTypes = {
  renderer: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};
export default Block;