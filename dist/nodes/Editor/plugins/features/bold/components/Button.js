function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import BoldIcon from '@material-ui/icons/FormatBold';
import { MenuButton } from 'lib/nodes/Editor';
/**
 * Button
 */

const Button = ({
  editor,
  ...props
}) => {
  const hasBolds = editor.hasBolds();

  const handleClick = () => {
    if (hasBolds) {
      editor.unwrapBold();
    } else {
      editor.wrapBold();
    }
  };

  return React.createElement(MenuButton, _extends({}, props, {
    color: hasBolds ? 'secondary' : 'default',
    onClick: handleClick
  }), React.createElement(BoldIcon, null));
};

Button.propTypes = {
  editor: PropTypes.shape({
    hasBolds: PropTypes.func.isRequired,
    wrapBold: PropTypes.func.isRequired,
    unwrapBold: PropTypes.func.isRequired
  }).isRequired
};
export default Button;