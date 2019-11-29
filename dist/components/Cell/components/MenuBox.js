function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
});
/**
 * MenuBox
 */

const MenuBox = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return React.createElement(Box, _extends({}, props, {
    className: classes.root,
    ref: ref
  }));
});
export default MenuBox;