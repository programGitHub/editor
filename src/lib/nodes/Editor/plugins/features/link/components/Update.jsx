import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

/**
 * Update
 */
const Update = ({ onClose, onUpdate, value }) => {
  const [v, setV] = React.useState(value);
  const handleChange = e => {
    e.stopPropagation();
    onUpdate({ href: e.target.value });
    setV(e.target.value);
  };

  return (
    <Box alignItems="center" display="flex">
      <TextField
        autoFocus
        margin="dense"
        multiline
        onChange={handleChange}
        value={v}
        variant="outlined"
      />
      <Box marginLeft={1}>
        <IconButton color="primary" onClick={onClose}>
          <DoneIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

Update.propTypes = {
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Update;
