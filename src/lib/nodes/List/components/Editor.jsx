import React from 'react';
import PropTypes from 'prop-types';
import getStartIndex from '../getStartIndex';
import Item from './Item';
import ListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { Menu, MenuBox, MenuItem } from 'lib/components/Cell';
import RichEditor from 'lib/nodes/Editor';
import ShareIcon from '@material-ui/icons/Share';

/**
 * Editor
 */
const Editor = ({ id, linked, nodes, numbered, onChange, readOnly, value }) => {
  const handleLink = () => {
    onChange({
      linked: !linked
    });
  };

  const handleListType = () => {
    onChange({
      numbered: !numbered
    });
  };

  const child = (
    <RichEditor
      onChange={onChange}
      readOnly={readOnly}
      renderBlock={Item}
      value={value}
    />
  );

  return (
    <React.Fragment>
      {!readOnly && (
        <Menu>
          <MenuBox>
            <MenuItem
              color={numbered ? 'default' : 'secondary'}
              onClick={handleListType}
            >
              <ListBulletedIcon />
            </MenuItem>
            <MenuItem
              color={numbered ? 'secondary' : 'default'}
              delay={1}
              onClick={handleListType}
            >
              <ListNumberedIcon />
            </MenuItem>
            <MenuItem
              color={linked ? 'secondary' : 'default'}
              delay={2}
              onClick={handleLink}
            >
              <ShareIcon />
            </MenuItem>
          </MenuBox>
        </Menu>
      )}
      {numbered ? (
        <ol start={linked ? getStartIndex(nodes, id) : 1}>{child}</ol>
      ) : (
        <ul>{child}</ul>
      )}
    </React.Fragment>
  );
};

Editor.defaultProps = {
  onChange: function() {},
  readOnly: false
};

Editor.propTypes = {
  id: PropTypes.string.isRequired,
  linked: PropTypes.bool.isRequired,
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  ).isRequired,
  numbered: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.object.isRequired
};

export default Editor;
