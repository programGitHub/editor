import React from 'react';
import AddButton from './AddButton';
import Box from '@material-ui/core/Box';
import useOver from '../../../hooks/useOver';
import Zoom from '@material-ui/core/Zoom';
/**
 * Add
 */

const Add = props => {
  const [over, onMouseEnter, onMouseLeave] = useOver();
  return React.createElement(Box, {
    marginBottom: 2,
    marginTop: 2,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    width: "100%"
  }, React.createElement(Box, {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%"
  }, React.createElement(AddButton, props), React.createElement(Box, {
    marginLeft: "auto"
  }, React.createElement(Zoom, {
    in: over,
    style: {
      transformOrigin: 'center right'
    }
  }, React.createElement(Box, {
    bgcolor: "grey.300",
    borderRadius: "2px 0 0 2px",
    height: 5,
    width: 200
  })))));
};

export default Add;