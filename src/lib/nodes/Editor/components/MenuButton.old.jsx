import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EditorContext } from './Editor';
import { MenuItem } from 'lib/components/Cell';
import Portal from '@material-ui/core/Portal';

function avoidFocusLoss(e) {
  // this function avoid focus to be lost when clicking on the buttons
  e.preventDefault();
}

/**
 * MenuButton
 */
const MenuButton = ({ children, ...props }) => {
  const { menu } = useContext(EditorContext);

  if (!menu.current) {
    return null;
  }

  return (
    <Portal container={menu.current}>
      <MenuItem {...props} onMouseDown={avoidFocusLoss}>
        {children}
      </MenuItem>
    </Portal>
  );
};

MenuButton.propTypes = {
  children: PropTypes.element.isRequired
};

export default MenuButton;
