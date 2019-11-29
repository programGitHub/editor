function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Update from './Update';
/**
 * Mark
 */

const Mark = ({
  attributes,
  children,
  editor,
  href,
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
    editor.updateLink(node, data);
  };

  return React.createElement(React.Fragment, null, React.createElement("a", _extends({}, attributes, {
    href: href,
    onClick: handleClick
  }), children), React.createElement(Update, {
    anchorEl: anchorEl,
    onClose: handleClose,
    onUpdate: handleUpdate,
    open: Boolean(anchorEl),
    value: href
  }));
};

Mark.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  editor: PropTypes.shape({
    updateLink: PropTypes.func.isRequired
  }).isRequired,
  href: PropTypes.string.isRequired,
  node: PropTypes.shape({
    key: PropTypes.string.isRequired
  }).isRequired
};
export default Mark;