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
  onSave,
  preview,
  setPreview
}) => React.createElement(MuiToolbar, {
  disableGutters: true,
  variant: "dense"
}, React.createElement(SaveButton, {
  onClick: onSave
}), React.createElement(Box, {
  flex: 1
}), React.createElement(EditButton, {
  in: !preview,
  onChange: setPreview
}));

Toolbar.propTypes = {
  onSave: PropTypes.func.isRequired,
  preview: PropTypes.bool.isRequired,
  setPreview: PropTypes.func.isRequired
};
export default Toolbar;