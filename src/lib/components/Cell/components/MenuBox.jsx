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

  return <Box {...props} className={classes.root} ref={ref} />;
});

export default MenuBox;
