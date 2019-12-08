import React from 'react';
import PropTypes from 'prop-types';
import RichEditor from '../../Editor';
import Typography from '@material-ui/core/Typography';
const plugins = ['paragraph'];
/**
 * Editor
 */

const Editor = ({
  onChange,
  readOnly,
  value
}) => React.createElement(Typography, {
  color: "textSecondary",
  component: "div",
  variant: "h4"
}, React.createElement(RichEditor, {
  onChange: onChange,
  plugins: plugins,
  readOnly: readOnly,
  value: value
}));

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