import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import { Popover } from 'lib/nodes/Editor';
import TextField from '@material-ui/core/TextField';
/**
 * Update
 */

const Update = ({
  onUpdate,
  value,
  ...props
}) => {
  const handleChange = ({
    target
  }) => {
    onUpdate({
      math: target.value
    });
  };

  return React.createElement(Popover, props, React.createElement(Box, {
    alignItems: "center",
    display: "flex"
  }, React.createElement(TextField, {
    autoFocus: true,
    margin: "dense",
    onChange: handleChange,
    value: value,
    variant: "outlined"
  }), React.createElement(Box, {
    marginLeft: 1
  }, React.createElement(IconButton, {
    color: "primary",
    onClick: props.onClose
  }, React.createElement(DoneIcon, null)))));
};

Update.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
export default Update;