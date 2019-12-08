import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
/**
 * ParagraphBlock
 */

const ParagraphBlock = ({
  children
}) => React.createElement(Typography, {
  component: "div",
  variant: "inherit"
}, children);

ParagraphBlock.propTypes = {
  children: PropTypes.node.isRequired
};
export default ParagraphBlock;