import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { CellContext } from './Cell';

const DELAY = 50;
const DURATION = 250;
const DURATION_OPACITY = 150;

const useStyles = makeStyles({
  root: {
    opacity: 0,
    transform: 'translateX(30px)',
    transition: `opacity ${DURATION_OPACITY}ms linear, transform ${DURATION}ms ease`
  },
  active: {
    // be careful to the order, override css
    opacity: 1,
    transform: 'translateX(0px)'
  }
});

/**
 * MenuItem
 */
const MenuItem = React.forwardRef(({ delay, ...props }, ref) => {
  const { in: inProp } = useContext(CellContext);
  const classes = useStyles();

  return (
    <IconButton
      {...props}
      className={clsx(classes.root, {
        [classes.active]: inProp
      })}
      ref={ref}
      size="small"
      style={{
        transitionDelay: `${inProp ? delay * DELAY : 0}ms`,
        zIndex: inProp ? 10000 : 1000
      }}
    />
  );
});

MenuItem.defaultProps = {
  delay: 0
};

MenuItem.propTypes = {
  delay: PropTypes.number.isRequired
};

export default MenuItem;
