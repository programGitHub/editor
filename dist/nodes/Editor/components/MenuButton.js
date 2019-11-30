function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EditorContext } from './Editor';
import { MenuItem } from '../../../components/Cell';
import Portal from '@material-ui/core/Portal';

function avoidFocusLoss(e) {
  // this function avoid focus to be lost when clicking on the buttons
  e.preventDefault();
}
/**
 * MenuButton
 */


const MenuButton = ({
  children,
  ...props
}) => {
  const {
    menu
  } = useContext(EditorContext);

  if (!menu.current) {
    return null;
  }

  return React.createElement(Portal, {
    container: menu.current
  }, React.createElement(MenuItem, _extends({}, props, {
    onMouseDown: avoidFocusLoss
  }), children));
};

MenuButton.propTypes = {
  children: PropTypes.element.isRequired
};
export default MenuButton;