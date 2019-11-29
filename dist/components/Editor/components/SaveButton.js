function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
/**
 * SaveButton
 */

const SaveButton = props => React.createElement(IconButton, _extends({}, props, {
  color: "primary"
}), React.createElement(SaveIcon, null));

export default SaveButton;