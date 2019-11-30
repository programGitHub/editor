function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import LinkIcon from '@material-ui/icons/Link';
import { MenuButton } from '../../../../../nodes/Editor';
/**
 * Button
 */

const Button = ({
  editor,
  ...props
}) => {
  const hasLinks = editor.hasLinks();

  const handleClick = () => {
    if (hasLinks) {
      editor.unwrapLink();
    } else {
      const {
        value
      } = editor;

      if (value.selection.isExpanded) {
        const href = 'test';
        editor.wrapLink({
          href
        });
      } else {
        const href = 'new',
              text = 'new';
        editor.insertText(text).moveFocusBackward(text.length).wrapLink({
          href
        });
      }
    }
  };

  return React.createElement(MenuButton, _extends({}, props, {
    color: hasLinks ? 'secondary' : 'default',
    onClick: handleClick
  }), React.createElement(LinkIcon, null));
};

Button.propTypes = {
  editor: PropTypes.shape({
    hasLinks: PropTypes.func.isRequired,
    wrapLink: PropTypes.func.isRequired,
    unwrapLink: PropTypes.func.isRequired
  }).isRequired
};
export default Button;