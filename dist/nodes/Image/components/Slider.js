import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MuiSlider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
/**
 * Slider
 */

const Slider = ({
  onChange,
  value
}) => React.createElement(Box, null, React.createElement(Typography, {
  gutterBottom: true
}, "Width"), React.createElement(MuiSlider, {
  onChange: onChange,
  value: value,
  valueLabelDisplay: "auto"
}));

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};
export default Slider;