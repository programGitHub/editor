import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import FormatCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatRightIcon from '@material-ui/icons/FormatAlignRight';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuBox, MenuItem } from 'lib/components/Cell';
import Slider from './Slider';
import TextField from './TextField';
import Viewer from './Viewer';

const useStyles = makeStyles({
  viewer: {
    opacity: 0.5
  }
});

/**
 * Editor
 */
const Editor = ({ align, onChange, readOnly, src, width }) => {
  const classes = useStyles();

  const handleAlign = newAlign => () => {
    onChange({ align: newAlign });
  };

  const handleChange = ({ target }) => {
    onChange({ src: target.value });
  };

  const handleWidth = (_, newValue) => {
    onChange({ width: newValue });
  };

  return (
    <Box minHeight={100} position="relative">
      {!readOnly && (
        <Menu>
          <MenuBox>
            <MenuItem onClick={handleAlign('flex-start')}>
              <FormatLeftIcon />
            </MenuItem>
            <MenuItem delay={1} onClick={handleAlign('center')}>
              <FormatCenterIcon />
            </MenuItem>
            <MenuItem delay={2} onClick={handleAlign('flex-end')}>
              <FormatRightIcon />
            </MenuItem>
          </MenuBox>
        </Menu>
      )}
      <Box className={classes.viewer}>
        <Viewer align={align} src={src} width={width} />
      </Box>
      <Box top={0} position="absolute" width="70%">
        <TextField label="Link" multiline onChange={handleChange} value={src} />
        <Slider onChange={handleWidth} value={width} />
      </Box>
    </Box>
  );
};

Editor.defaultProps = {
  readOnly: false,
  width: 30
};

Editor.propTypes = {
  align: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};

export default Editor;
