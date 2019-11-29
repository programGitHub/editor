import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
/**
 * EditButton
 */

const EditButton = ({
  in: inProp,
  onChange
}) => React.createElement(FormControl, null, React.createElement(FormControlLabel, {
  checked: inProp,
  control: React.createElement(Switch, {
    color: "primary"
  }),
  label: "Edit",
  labelPlacement: "start",
  onChange: e => {
    onChange(!e.target.checked);
  },
  value: inProp
}));

EditButton.propTypes = {
  in: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
export default EditButton;