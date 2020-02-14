import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CellContext } from './Cell';
import Portal from '@material-ui/core/Portal';

/**
 * MenuPortal
 */
const MenuPortal = ({ children }) => {
  const { menu } = useContext(CellContext);

  if (!menu) {
    return null;
  }

  return <Portal container={menu.current}>{children}</Portal>;
};

MenuPortal.propTypes = {
  children: PropTypes.node
};

export default MenuPortal;
