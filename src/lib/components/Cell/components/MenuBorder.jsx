import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    transition: 'background-color 200ms linear'
  },
  ticTac: {
    transition: 'height 200ms'
  }
});

/**
 * MenuBorder
 */
const MenuBorder = ({ active, height }) => {
  const classes = useStyles();

  return (
    <Box
      bgcolor={active ? 'secondary.light' : 'primary.light'}
      className={classes.root}
      marginLeft={1}
      position="relative"
      width={10}
      zIndex={20}
    >
      <Box
        bottom={0}
        bgcolor="error.main"
        className={classes.ticTac}
        height={height}
        left={0}
        position="absolute"
        right={0}
      />
    </Box>
  );
};

MenuBorder.defaultProps = {
  active: false,
  height: 0
};

MenuBorder.propTypes = {
  active: PropTypes.bool.isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default MenuBorder;
