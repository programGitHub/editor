function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import ViewerContext from '../context';
/**
 * Viewer
 */

const Viewer = ({
  blocks,
  plugins
}) => React.createElement(ViewerContext.Provider, {
  value: plugins
}, blocks.map(({
  id,
  ...blockProps
}) => React.createElement(Block, _extends({}, blockProps, {
  key: id
}))));

Viewer.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired
  })).isRequired,
  plugins: PropTypes.object.isRequired
};
export default Viewer;