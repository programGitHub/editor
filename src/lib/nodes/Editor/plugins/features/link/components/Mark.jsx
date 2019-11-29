import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Update from './Update';

/**
 * Mark
 */
const Mark = ({ attributes, children, editor, href, node }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = data => {
    editor.updateLink(node, data);
  };

  return (
    <React.Fragment>
      <a {...attributes} href={href} onClick={handleClick}>
        {children}
      </a>
      <Update
        anchorEl={anchorEl}
        onClose={handleClose}
        onUpdate={handleUpdate}
        open={Boolean(anchorEl)}
        value={href}
      />
    </React.Fragment>
  );
};

Mark.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  editor: PropTypes.shape({
    updateLink: PropTypes.func.isRequired
  }).isRequired,
  href: PropTypes.string.isRequired,
  node: PropTypes.shape({
    key: PropTypes.string.isRequired
  }).isRequired
};

export default Mark;
