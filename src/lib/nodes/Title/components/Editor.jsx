import React from 'react';
import PropTypes from 'prop-types';
import RichEditor from 'lib/nodes/Editor';
import Typography from '@material-ui/core/Typography';

const plugins = ['paragraph'];

/**
 * Editor
 */
const Editor = ({ onChange, readOnly, value }) => (
  <Typography color="textSecondary" component="div" variant="h4">
    <RichEditor
      onChange={onChange}
      plugins={plugins}
      readOnly={readOnly}
      value={value}
    />
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
