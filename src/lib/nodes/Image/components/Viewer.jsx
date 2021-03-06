import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

/**
 * Viewer
 */
const Viewer = ({ align, src, width }) => (
  <Box display="flex" flexDirection="row" justifyContent={align}>
    <img alt="" src={src} style={{ width: `${width}%` }} />
  </Box>
);

Viewer.defaultProps = {
  width: 30
};

Viewer.propTypes = {
  align: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

export default Viewer;
