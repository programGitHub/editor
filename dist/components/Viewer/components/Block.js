import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ViewerContext from '../context';
/**
 * Block
 */

const Block = ({
  type,
  ...props
}) => {
  const plugins = useContext(ViewerContext);

  if (typeof plugins !== 'object' || !Object.hasOwnProperty.call(plugins, type)) {
    return null;
  }

  const Viewer = plugins[type].renderViewer;
  return React.createElement(Box, {
    marginBottom: 2
  }, React.createElement(Viewer, props));
};

Block.propTypes = {
  type: PropTypes.string.isRequired
};
export default Block;