function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import FunctionsIcon from '@material-ui/icons/Functions';
import { MenuButton } from 'lib/nodes/Editor';
/**
 * Button
 */

const Button = ({
  editor,
  ...props
}) => {
  const handleClick = () => {
    const {
      value
    } = editor;

    if (value.selection.isExpanded) {
      editor.insertFormula({
        math: value.fragment.text
      });
    } else {
      editor.insertFormula({
        math: '2x + 1'
      });
    }
  };

  return React.createElement(MenuButton, _extends({}, props, {
    onClick: handleClick
  }), React.createElement(FunctionsIcon, null));
};

Button.propTypes = {
  editor: PropTypes.shape({
    insertFormula: PropTypes.func.isRequired
  }).isRequired
};
export default Button;