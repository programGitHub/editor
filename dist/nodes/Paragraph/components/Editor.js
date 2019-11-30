import React from 'react';
import PropTypes from 'prop-types';
import RichEditor from '../../nodes/Editor';
/**
 * Editor
 */

const Editor = ({
  onChange,
  readOnly,
  value
}) => React.createElement(RichEditor, {
  onChange: onChange,
  readOnly: readOnly,
  value: value
});

Editor.defaultProps = {
  onChange: function () {},
  readOnly: false
};
Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.object.isRequired
};
export default Editor;