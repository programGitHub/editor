import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import colors from '../colors';
import Highlight from './Highlight';
import InfoIcon from '@material-ui/icons/Info';
import { Menu, MenuBox, MenuItem } from 'lib/components/Cell';
import RichEditor from 'lib/nodes/Editor';
import WarningIcon from '@material-ui/icons/Warning';

/**
 * Editor
 */
const Editor = ({ color, onChange, readOnly, value }) => {
  const handleColor = newColor => () => {
    onChange({ color: newColor });
  };

  return (
    <Highlight color={color}>
      {!readOnly && (
        <Menu column={0}>
          <MenuBox>
            <MenuItem onClick={handleColor(colors.DEFAULT)}>
              <CancelIcon />
            </MenuItem>
            <MenuItem delay={1} onClick={handleColor(colors.INFO)}>
              <InfoIcon />
            </MenuItem>
            <MenuItem delay={2} onClick={handleColor(colors.WARNING)}>
              <WarningIcon />
            </MenuItem>
          </MenuBox>
        </Menu>
      )}
      <RichEditor onChange={onChange} readOnly={readOnly} value={value} />
    </Highlight>
  );
};

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
