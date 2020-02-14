import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'lib/components/Cell';
import RichEditor from 'lib/nodes/Editor';
import { Typography } from '@material-ui/core';

/**
 * Editor
 */
const Editor = ({ onCancel, onChange, readOnly, value }) => (
  <Typography component="div" variant="body1">
    <RichEditor onChange={onChange} readOnly={readOnly} value={value}>
      {menu => (
        <Menu active={!readOnly} onCancel={onCancel}>
          {menu}
        </Menu>
      )}
    </RichEditor>
  </Typography>
);

Editor.defaultProps = {
  onChange: function() {},
  readOnly: false
};

Editor.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.object.isRequired
};

export default Editor;
