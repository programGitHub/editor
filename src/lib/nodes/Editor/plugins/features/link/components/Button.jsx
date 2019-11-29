import React from 'react';
import PropTypes from 'prop-types';
import LinkIcon from '@material-ui/icons/Link';
import { MenuButton } from 'lib/nodes/Editor';

/**
 * Button
 */
const Button = ({ editor, ...props }) => {
  const hasLinks = editor.hasLinks();

  const handleClick = () => {
    if (hasLinks) {
      editor.unwrapLink();
    } else {
      const { value } = editor;

      if (value.selection.isExpanded) {
        const href = 'test';
        editor.wrapLink({ href });
      } else {
        const href = 'new',
          text = 'new';

        editor
          .insertText(text)
          .moveFocusBackward(text.length)
          .wrapLink({ href });
      }
    }
  };

  return (
    <MenuButton
      {...props}
      color={hasLinks ? 'secondary' : 'default'}
      onClick={handleClick}
    >
      <LinkIcon />
    </MenuButton>
  );
};

Button.propTypes = {
  editor: PropTypes.shape({
    hasLinks: PropTypes.func.isRequired,
    wrapLink: PropTypes.func.isRequired,
    unwrapLink: PropTypes.func.isRequired
  }).isRequired
};

export default Button;
