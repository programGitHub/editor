import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import IconButton from '@material-ui/core/IconButton';
import { MenuContext } from './Menu';
import '../styles/menuItem.scss';

/**
 * MenuItem
 */
const MenuItem = React.forwardRef(({ delay, ...props }, ref) => {
  const { in: inProp } = useContext(MenuContext);

  return (
    <CSSTransition
      appear
      classNames="cused-menu-item"
      in={inProp}
      timeout={150 + delay}
      unmountOnExit
    >
      <div style={{ transitionDelay: `${inProp ? delay : 0}ms` }}>
        <IconButton {...props} ref={ref} size="small" />
      </div>
    </CSSTransition>
  );
});

MenuItem.defaultProps = {
  delay: 0
};

MenuItem.propTypes = {
  delay: PropTypes.number.isRequired
};

export default MenuItem;
