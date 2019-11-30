import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import useEditorContext from '../hooks/useEditorContext';
import useOver from 'hooks/useOver';
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

const AddButton = ({
  onClick
}) => {
  const classes = useStyles();
  const [over, onMouseEnter, onMouseLeave] = useOver();
  const {
    plugins
  } = useEditorContext();
  const actions = Object.keys(plugins).map(key => plugins[key]).filter(plugin => Object.hasOwnProperty.call(plugin, 'menu')).map(plugin => ({
    defaultProps: plugin.defaultProps || {},
    icon: plugin.menu,
    label: plugin.menuLabel || '',
    type: plugin.type
  }));
  return React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    onMouseLeave: onMouseLeave
  }, React.createElement(IconButton, {
    color: "primary",
    onMouseEnter: onMouseEnter
  }, React.createElement(AddIcon, {
    className: clsx(classes.button, {
      [classes.rotate]: over
    })
  })), React.createElement(Grid, {
    className: classes.grid,
    container: true,
    spacing: 1
  }, actions.map((action, i) => React.createElement(Grid, {
    item: true,
    key: i
  }, React.createElement(Zoom, {
    in: over,
    style: {
      transitionDelay: over ? i * 40 : 0
    }
  }, React.createElement(Tooltip, {
    title: action.label
  }, React.createElement(IconButton, {
    onClick: onClick({ ...action.defaultProps,
      type: action.type
    })
  }, action.icon)))))));
};

export default AddButton;