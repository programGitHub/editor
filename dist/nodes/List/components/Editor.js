import React from 'react';
import PropTypes from 'prop-types';
import getStartIndex from '../getStartIndex';
import Item from './Item';
import ListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import { Menu, MenuBox, MenuItem } from '../../../components/Cell';
import RichEditor from '../../Editor';
import ShareIcon from '@material-ui/icons/Share';
/**
 * Editor
 */

const Editor = ({
  id,
  linked,
  nodes,
  numbered,
  onChange,
  readOnly,
  value
}) => {
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

  const child = React.createElement(RichEditor, {
    onChange: onChange,
    readOnly: readOnly,
    renderBlock: Item,
    value: value
  });
  return React.createElement(React.Fragment, null, !readOnly && React.createElement(Menu, null, React.createElement(MenuBox, null, React.createElement(MenuItem, {
    color: numbered ? 'default' : 'secondary',
    onClick: handleListType
  }, React.createElement(ListBulletedIcon, null)), React.createElement(MenuItem, {
    color: numbered ? 'secondary' : 'default',
    delay: 1,
    onClick: handleListType
  }, React.createElement(ListNumberedIcon, null)), React.createElement(MenuItem, {
    color: linked ? 'secondary' : 'default',
    delay: 2,
    onClick: handleLink
  }, React.createElement(ShareIcon, null)))), numbered ? React.createElement("ol", {
    start: linked ? getStartIndex(nodes, id) : 1
  }, child) : React.createElement("ul", null, child));
};

Editor.defaultProps = {
  onChange: function () {},
  readOnly: false
};
Editor.propTypes = {
  id: PropTypes.string.isRequired,
  linked: PropTypes.bool.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired
  })).isRequired,
  numbered: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  value: PropTypes.object.isRequired
};
export default Editor;