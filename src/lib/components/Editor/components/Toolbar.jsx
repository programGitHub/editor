import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import EditButton from './EditButton';
import MuiToolbar from '@material-ui/core/Toolbar';
import SaveButton from './SaveButton';

/**
 * Toolbar
 */
const Toolbar = ({ onSave, preview, setPreview }) => (
  <MuiToolbar disableGutters variant="dense">
    <SaveButton onClick={onSave} />
    <Box flex={1} />
    <EditButton in={!preview} onChange={setPreview} />
  </MuiToolbar>
);

Toolbar.propTypes = {
  onSave: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired,
  setPreview: PropTypes.func.isRequired
};

export default Toolbar;
