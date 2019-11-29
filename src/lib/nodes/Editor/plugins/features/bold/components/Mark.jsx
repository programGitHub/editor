import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Mark
 */
const Mark = ({ attributes, children }) => (
  <Typography {...attributes} color="secondary" component="span">
    {children}
  </Typography>
);

Mark.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default Mark;
