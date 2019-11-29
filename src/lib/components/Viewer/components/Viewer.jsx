import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import ViewerContext from '../context';

/**
 * Viewer
 */
const Viewer = ({ blocks, plugins }) => (
  <ViewerContext.Provider value={plugins}>
    {blocks.map(({ id, ...blockProps }) => (
      <Block {...blockProps} key={id} />
    ))}
  </ViewerContext.Provider>
);

Viewer.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  plugins: PropTypes.object.isRequired
};

export default Viewer;
