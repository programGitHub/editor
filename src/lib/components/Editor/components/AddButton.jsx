import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import { EditorContext } from './Editor';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import useOver from 'lib/hooks/useOver';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
  button: {
    transition: 'transform 200ms ease'
  },
  grid: {
    marginLeft: theme.spacing(1)
  },
  rotate: {
    transform: 'rotateZ(45deg)'
  }
}));

/**
 * AddButton
 */
const AddButton = ({ onClick }) => {
  const classes = useStyles();
  const [over, onMouseEnter, onMouseLeave] = useOver();
  const { plugins } = useContext(EditorContext);

  const actions = plugins
    .map(({ plugin }) => plugin)
    .filter(plugin => Object.hasOwnProperty.call(plugin, 'menu'))
    .map(plugin => ({
      defaultProps: plugin.defaultProps || {},
      icon: plugin.menu,
      label: plugin.menuLabel || '',
      type: plugin.type
    }));

  return (
    <Box display="flex" flexDirection="row" onMouseLeave={onMouseLeave}>
      <IconButton color="primary" onMouseEnter={onMouseEnter}>
        <AddIcon className={clsx(classes.button, { [classes.rotate]: over })} />
      </IconButton>
      <Grid className={classes.grid} container spacing={1}>
        {actions.map((action, i) => (
          <Grid item key={i}>
            <Zoom in={over} style={{ transitionDelay: over ? i * 40 : 0 }}>
              <Tooltip title={action.label}>
                <IconButton
                  onClick={onClick({
                    ...action.defaultProps,
                    type: action.type
                  })}
                >
                  {action.icon}
                </IconButton>
              </Tooltip>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AddButton;
