import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import EditButton from './EditButton';
import MuiToolbar from '@material-ui/core/Toolbar';
import SaveButton from './SaveButton';
/**
 * Toolbar
 */

const Toolbar = ({
  onPreviewChange,
  onSave,
  preview
}) => React.createElement(MuiToolbar, {
  disableGutters: true,
  variant: "dense"
}, React.createElement(SaveButton, {
  onClick: onSave
}), React.createElement(Box, {
  flex: 1
}), React.createElement(EditButton, {
  in: !preview,
  onChange: onPreviewChange
}));

Toolbar.propTypes = {
  onPreviewChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired
};
export default Toolbar;