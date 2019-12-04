function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
export const ViewerContext = React.createContext([]);
/**
 * Viewer
 */

const Viewer = ({
  plugins,
  value
}) => React.createElement(ViewerContext.Provider, {
  value: plugins
}, value.map(({
  id,
  ...blockProps
}) => React.createElement(Block, _extends({}, blockProps, {
  key: id
}))));

Viewer.propTypes = {
  plugins: PropTypes.array.isRequired,
  value: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired
};
export default Viewer;