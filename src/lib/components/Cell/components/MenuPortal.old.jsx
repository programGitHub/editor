import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions';
import CellContext from '../context';
import Portal from '@material-ui/core/Portal';

/**
 * MenuPortal
 */
const MenuPortal = ({ children, delay, ...props }) => {
  const { in: inProp, menu } = useContext(CellContext);

  if (!menu) {
    return null;
  }

  return (
    <Portal container={menu.current}>
      <Actions {...props} delay={delay + 1} in={inProp}>
        {children}
      </Actions>
    </Portal>
  );
};

MenuPortal.defaultProps = {
  delay: 0
};

MenuPortal.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.number.isRequired
};

export default MenuPortal;
