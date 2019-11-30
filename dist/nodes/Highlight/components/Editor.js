import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import colors from '../colors';
import Highlight from './Highlight';
import InfoIcon from '@material-ui/icons/Info';
import { Menu, MenuBox, MenuItem } from 'components/Cell';
import RichEditor from 'nodes/Editor';
import WarningIcon from '@material-ui/icons/Warning';
/**
 * Editor
 */

const Editor = ({
  color,
  onChange,
  readOnly,
  value
}) => {
  const handleColor = newColor => () => {
    onChange({
      color: newColor
    });
  };

  return React.createElement(Highlight, {
    color: color
  }, !readOnly && React.createElement(Menu, {
    column: 0
  }, React.createElement(MenuBox, null, React.createElement(MenuItem, {
    onClick: handleColor(colors.DEFAULT)
  }, React.createElement(CancelIcon, null)), React.createElement(MenuItem, {
    delay: 1,
    onClick: handleColor(colors.INFO)
  }, React.createElement(InfoIcon, null)), React.createElement(MenuItem, {
    delay: 2,
    onClick: handleColor(colors.WARNING)
  }, React.createElement(WarningIcon, null)))), React.createElement(RichEditor, {
    onChange: onChange,
    readOnly: readOnly,
    value: value
  }));
};

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