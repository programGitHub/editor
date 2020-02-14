import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import Menu from './Menu';
import MenuBox from './MenuBox';
import MenuItem from './MenuItem';

/**
 * ActiveMenu
 */
const ActiveMenu = ({ active, children, onCancel }) => (
  <Menu active={active}>
    {children}
    <MenuBox>
      <MenuItem onClick={onCancel}>
        <CloseIcon />
      </MenuItem>
    </MenuBox>
  </Menu>
);

ActiveMenu.defaultProps = {
  active: true
};

ActiveMenu.propTypes = {
  children: PropTypes.node
  // onCancel: PropTypes.func.isRequired
};

export default ActiveMenu;
