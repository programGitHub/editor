import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * ParagraphBlock
 */
const ParagraphBlock = ({ children }) => <Typography>{children}</Typography>;

ParagraphBlock.propTypes = {
  children: PropTypes.node.isRequired
};

export default ParagraphBlock;
