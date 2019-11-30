import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { CellContext } from './Cell';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Fade from '@material-ui/core/Fade';
import GamepadIcon from '@material-ui/icons/Gamepad';
import Menu from './Menu';
import MenuBox from './MenuBox';
import MenuItem from './MenuItem';
import MenuBorder from './MenuBorder';
import useHold from '../../../hooks/useHold';
/**
 * CellMenu
 */

const CellMenu = React.forwardRef(({
  active,
  onCancel,
  onRemove,
  over,
  refActions
}, ref) => {
  const [removing, onRemoveDown, onRemoveLeave, onRemoveUp] = useHold();
  const [ticTac, setTicTac] = React.useState(0);

  if (removing) {
    if (ticTac < 100) {
      setTimeout(() => {
        setTicTac(ticTac + 10);
      }, 100);
    } else {
      onRemove();
    }
  } else if (!removing && ticTac !== 0) {
    setTicTac(0);
  }

  return React.createElement(Fade, {
    in: active || over
  }, React.createElement(Box, {
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 0,
    top: 0
  }, React.createElement(Box, {
    position: "relative"
  }, React.createElement(Box, {
    marginRight: -3.75,
    position: "absolute",
    right: 0,
    top: 0
  }, React.createElement(Menu, {
    ref: refActions
  }, React.createElement(MenuItem, {
    onClick: onCancel
  }, React.createElement(CloseIcon, null))))), React.createElement(CellContext.Provider, {
    value: {
      in: over && !active
    }
  }, React.createElement(Menu, {
    in: over && !active
  }, React.createElement(MenuBox, null, React.createElement(MenuItem, {
    ref: ref
  }, React.createElement(GamepadIcon, null)), React.createElement(MenuItem, {
    delay: 1,
    onMouseDown: onRemoveDown,
    onMouseLeave: onRemoveLeave,
    onMouseUp: onRemoveUp
  }, removing ? React.createElement(DoneIcon, {
    color: "error"
  }) : React.createElement(DeleteIcon, null))))), React.createElement(MenuBorder, {
    active: active,
    height: `${ticTac}%`
  })));
});
CellMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  over: PropTypes.bool.isRequired,
  refActions: PropTypes.object
};
export default CellMenu;