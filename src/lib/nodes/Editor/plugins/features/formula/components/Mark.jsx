import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InlineMath } from 'react-katex';
import Typography from '@material-ui/core/Typography';
import Update from './Update';
import 'katex/dist/katex.min.css';

/**
 * Mark
 */
const Mark = ({ attributes, editor, math, node }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdate = data => {
    editor.updateFormula(node, data);
  };

  return (
    <React.Fragment>
      <span onClick={handleClick}>
        <InlineMath
          {...attributes}
          math={math}
          renderError={error => (
            <Typography color="error" component="span">
              {`${error.name}: ${error.message}`}
            </Typography>
          )}
        />
      </span>
      <Update
        anchorEl={anchorEl}
        onClose={handleClose}
        onUpdate={handleUpdate}
        open={Boolean(anchorEl)}
        value={math}
      />
    </React.Fragment>
  );
};

Mark.propTypes = {
  attributes: PropTypes.object.isRequired,
  editor: PropTypes.shape({
    updateLink: PropTypes.func.isRequired
  }).isRequired,
  math: PropTypes.string.isRequired,
  node: PropTypes.shape({
    key: PropTypes.string.isRequired
  }).isRequired
};

export default Mark;
