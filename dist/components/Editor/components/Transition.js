function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import '../styles.css';
const DURATION = 300;
/**
 * Transition
 */

const Transition = ({
  children,
  ...props
}) => React.createElement(CSSTransition, _extends({}, props, {
  classNames: "custom",
  timeout: DURATION
}), React.createElement("div", null, children));

Transition.propTypes = {
  children: PropTypes.node.isRequired
};
export default Transition;