import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';

export const ViewerContext = React.createContext([]);

/**
 * Viewer
 */
const Viewer = ({ plugins, value }) => (
  <ViewerContext.Provider value={plugins}>
    {value.map(({ id, ...blockProps }) => (
      <Block {...blockProps} key={id} />
    ))}
  </ViewerContext.Provider>
);

Viewer.propTypes = {
  plugins: PropTypes.array.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Viewer;
