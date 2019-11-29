import React from 'react';
import PropTypes from 'prop-types';
import FunctionsIcon from '@material-ui/icons/Functions';
import { MenuButton } from 'lib/nodes/Editor';

/**
 * Button
 */
const Button = ({ editor, ...props }) => {
  const handleClick = () => {
    const { value } = editor;

    if (value.selection.isExpanded) {
      editor.insertFormula({ math: value.fragment.text });
    } else {
      editor.insertFormula({ math: '2x + 1' });
    }
  };

  return (
    <MenuButton {...props} onClick={handleClick}>
      <FunctionsIcon />
    </MenuButton>
  );
};

Button.propTypes = {
  editor: PropTypes.shape({
    insertFormula: PropTypes.func.isRequired
  }).isRequired
};

export default Button;
