import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
/**
 * Menu
 */

const Menu = React.forwardRef(({
  children
}, ref) => React.createElement(Box, {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "row",
  onClick: e => {
    e.stopPropagation();
  },
  ref: ref
}, children));
Menu.propTypes = {
  children: PropTypes.node
};
export default Menu;