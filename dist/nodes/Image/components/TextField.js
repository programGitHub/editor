function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MuiTextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
/**
 * TextField
 */

const TextField = ({
  label,
  onChange,
  value,
  ...props
}) => React.createElement(Box, {
  marginBottom: 2,
  width: "100%"
}, React.createElement(Typography, {
  gutterBottom: true
}, label), React.createElement(MuiTextField, _extends({}, props, {
  fullWidth: true,
  onChange: onChange,
  value: value
})));

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
export default TextField;