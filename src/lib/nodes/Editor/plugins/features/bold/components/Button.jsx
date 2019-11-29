import React from 'react';
import PropTypes from 'prop-types';
import BoldIcon from '@material-ui/icons/FormatBold';
import { MenuButton } from 'lib/nodes/Editor';

/**
 * Button
 */
const Button = ({ editor, ...props }) => {
  const hasBolds = editor.hasBolds();

  const handleClick = () => {
    if (hasBolds) {
      editor.unwrapBold();
    } else {
      editor.wrapBold();
    }
  };

  return (
    <MenuButton
      {...props}
      color={hasBolds ? 'secondary' : 'default'}
      onClick={handleClick}
    >
      <BoldIcon />
    </MenuButton>
  );
};

Button.propTypes = {
  editor: PropTypes.shape({
    hasBolds: PropTypes.func.isRequired,
    wrapBold: PropTypes.func.isRequired,
    unwrapBold: PropTypes.func.isRequired
  }).isRequired
};

export default Button;
