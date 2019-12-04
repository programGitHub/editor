import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import EditButton from './EditButton';
import MuiToolbar from '@material-ui/core/Toolbar';
import SaveButton from './SaveButton';

/**
 * Toolbar
 */
const Toolbar = ({ onPreviewChange, onSave, preview }) => (
  <MuiToolbar disableGutters variant="dense">
    <SaveButton onClick={onSave} />
    <Box flex={1} />
    <EditButton in={!preview} onChange={onPreviewChange} />
  </MuiToolbar>
);

Toolbar.propTypes = {
  onPreviewChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired
};

export default Toolbar;
