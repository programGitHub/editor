import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

/**
 * EditButton
 */
const EditButton = ({ in: inProp, onChange }) => (
  <FormControl>
    <FormControlLabel
      checked={inProp}
      control={<Switch color="primary" />}
      label="Edit"
      labelPlacement="start"
      onChange={e => {
        onChange(!e.target.checked);
      }}
      value={inProp}
    />
  </FormControl>
);

EditButton.propTypes = {
  in: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditButton;
