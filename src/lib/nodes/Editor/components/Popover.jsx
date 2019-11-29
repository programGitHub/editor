import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MuiPopover from '@material-ui/core/Popover';

/**
 * Popover
 */
const Popover = ({ children, ...props }) => {
  const handleKey = e => {
    if (e.keyCode === 13) {
      props.onClose();
    }
  };

  return (
    <MuiPopover
      {...props}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      <Box onKeyDown={handleKey} padding={1}>
        {children}
      </Box>
    </MuiPopover>
  );
};

Popover.propTypes = {
  children: PropTypes.node
};

export default Popover;
