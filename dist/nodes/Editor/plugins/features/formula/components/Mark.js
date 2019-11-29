function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InlineMath } from 'react-katex';
import Typography from '@material-ui/core/Typography';
import Update from './Update';
import 'katex/dist/katex.min.css';
/**
 * Mark
 */

const Mark = ({
  attributes,
  editor,
  math,
  node
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = data => {
    editor.updateFormula(node, data);
  };

  return React.createElement(React.Fragment, null, React.createElement("span", {
    onClick: handleClick
  }, React.createElement(InlineMath, _extends({}, attributes, {
    math: math,
    renderError: error => React.createElement(Typography, {
      color: "error",
      component: "span"
    }, `${error.name}: ${error.message}`)
  }))), React.createElement(Update, {
    anchorEl: anchorEl,
    onClose: handleClose,
    onUpdate: handleUpdate,
    open: Boolean(anchorEl),
    value: math
  }));
};

Mark.propTypes = {
  attributes: PropTypes.object.isRequired,
  editor: PropTypes.shape({
    updateLink: PropTypes.func.isRequired
  }).isRequired,
  math: PropTypes.string.isRequired,
  node: PropTypes.shape({
    key: PropTypes.string.isRequired
  }).isRequired
};
export default Mark;