import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const DELAY = 30;
const TIMEOUT = 150;

const useStyles = makeStyles({
  base: {
    opacity: 0,
    transform: 'translateX(20px)',
    transition: `opacity ${TIMEOUT}ms linear, transform ${TIMEOUT}ms ease-out`
  },
  active: ({ column }) => ({
    // à mettre après base pour override correctement
    opacity: 1,
    transform: `translate(${-column * 30}px)`,
    zIndex: 10
  })
});

/**
 * Actions
 */
const Actions = React.forwardRef(
  ({ children, column, delay, in: inProp }, ref) => {
    const classes = useStyles({ column });
    const btnClass = clsx(classes.base, { [classes.active]: inProp });
    const show = Array.isArray(children) ? [...children] : [children];

    return (
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        onClick={e => {
          e.stopPropagation();
        }}
        overflow="hidden"
        ref={ref}
      >
        {show.map((child, i) => (
          <div
            className={btnClass}
            key={i}
            style={{
              transitionDelay: inProp ? `${DELAY * (i + delay)}ms` : '0ms'
            }}
          >
            {child}
          </div>
        ))}
      </Box>
    );
  }
);

Actions.defaultProps = {
  column: 0,
  delay: 0
};

Actions.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  column: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  in: PropTypes.bool.isRequired
};

export default Actions;
