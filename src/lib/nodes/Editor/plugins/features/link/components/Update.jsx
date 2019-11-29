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
const Update = ({ onUpdate, value, ...props }) => {
  const handleChange = ({ target }) => {
    onUpdate({ href: target.value });
  };

  return (
    <Popover {...props}>
      <Box alignItems="center" display="flex">
        <TextField
          autoFocus
          margin="dense"
          onChange={handleChange}
          value={value}
          variant="outlined"
        />
        <Box marginLeft={1}>
          <IconButton color="primary" onClick={props.onClose}>
            <DoneIcon />
          </IconButton>
        </Box>
      </Box>
    </Popover>
  );
};

Update.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default Update;
