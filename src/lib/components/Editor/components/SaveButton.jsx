import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';

/**
 * SaveButton
 */
const SaveButton = props => (
  <IconButton {...props} color="primary">
    <SaveIcon />
  </IconButton>
);

export default SaveButton;
