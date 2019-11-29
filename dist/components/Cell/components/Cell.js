import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CellMenu from './CellMenu';
import { makeStyles } from '@material-ui/core/styles';
import useCell from '../hooks/useCell';
export const CellContext = React.createContext({
  in: false,
  menu: null
});
const useStyles = makeStyles({
  root: ({
    active
  }) => ({
    cursor: active ? 'inherit' : 'pointer'
  })
});
/**
 * Cell
 */

const Cell = ({
  active,
  children,
  id,
  index,
  move,
  onActive,
  onCancel,
  onRemove
}) => {
  const classes = useStyles({
    active
  });
  const refActions = useRef(null);
  const [over, onMouseEnter, onMouseLeave, dragHandle, isDragging, ref] = useCell({
    id,
    index,
    move
  });
  return React.createElement(Box, {
    className: classes.root,
    onClick: onActive,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    padding: 2,
    position: "relative",
    ref: ref,
    style: {
      opacity: isDragging ? 0 : 1
    }
  }, React.createElement(CellContext.Provider, {
    value: {
      in: active,
      menu: refActions
    }
  }, children, React.createElement(CellMenu, {
    active: active,
    onCancel: onCancel,
    onRemove: onRemove,
    over: over,
    ref: dragHandle,
    refActions: refActions
  })));
};

Cell.defaultProps = {
  active: false
};
Cell.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  index: PropTypes.number.isRequired,
  move: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
export default Cell;