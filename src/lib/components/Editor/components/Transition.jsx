import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import '../styles.css';

const DURATION = 300;

/**
 * Transition
 */
const Transition = ({ children, ...props }) => (
  <CSSTransition {...props} classNames="custom" timeout={DURATION}>
    <div>{children}</div>
  </CSSTransition>
);

Transition.propTypes = {
  children: PropTypes.node.isRequired
};

export default Transition;
