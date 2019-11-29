function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import MuiPopover from '@material-ui/core/Popover';
/**
 * Popover
 */

const Popover = ({
  children,
  ...props
}) => {
  const handleKey = e => {
    if (e.keyCode === 13) {
      props.onClose();
    }
  };

  return React.createElement(MuiPopover, _extends({}, props, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    }
  }), React.createElement(Box, {
    onKeyDown: handleKey,
    padding: 1
  }, children));
};

Popover.propTypes = {
  children: PropTypes.node
};
export default Popover;