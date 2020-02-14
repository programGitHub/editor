import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import '../styles/node.scss';

const DURATION = 100;

/**
 * NodeTransition
 */
const NodeTransition = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    classNames="cused-node-switch"
    timeout={DURATION}
    unmountOnExit
  >
    <div>{children}</div>
  </CSSTransition>
);

NodeTransition.propTypes = {
  children: PropTypes.node.isRequired
};

export default NodeTransition;
