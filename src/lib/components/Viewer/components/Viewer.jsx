import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';

export const ViewerContext = React.createContext([]);

/**
 * Viewer
 */
const Viewer = ({ blockRenderer, plugins, value }) => (
  <ViewerContext.Provider value={plugins}>
    {value.map(blockProps => (
      <Block
        {...blockProps}
        key={blockProps.id}
        nodes={value}
        renderer={blockRenderer}
      />
    ))}
  </ViewerContext.Provider>
);

Viewer.propTypes = {
  blockRenderer: PropTypes.func,
  plugins: PropTypes.array.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Viewer;
