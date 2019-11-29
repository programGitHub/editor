import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import colors from '../colors';
/**
 * Highlight
 */

const Highlight = ({
  children,
  color
}) => React.createElement(Box, {
  borderRadius: 8,
  padding: 2,
  style: {
    backgroundColor: color
  }
}, children);

Highlight.defaultProps = {
  color: colors.DEFAULT
};
Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
};
export default Highlight;