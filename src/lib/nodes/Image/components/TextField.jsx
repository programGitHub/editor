import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MuiTextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

/**
 * TextField
 */
const TextField = ({ label, onChange, value, ...props }) => (
  <Box marginBottom={2} width="100%">
    <Typography gutterBottom>{label}</Typography>
    <MuiTextField {...props} fullWidth onChange={onChange} value={value} />
  </Box>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TextField;
