import React from 'react';
import PropTypes from 'prop-types';
import RichEditor from 'lib/nodes/Editor';
import { Typography } from '@material-ui/core';

/**
 * Editor
 */
const Editor = ({ onChange, readOnly, value }) => (
  <Typography component="div" variant="body1">
    <RichEditor onChange={onChange} readOnly={readOnly} value={value} />
  </Typography>
);

Editor.defaultProps = {
  onChange: function() {},
  readOnly: false
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.object.isRequired
};

export default Editor;
