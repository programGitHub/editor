import React from 'react';
export default function (Component, menuPos) {
  return {
    renderEditor: (_, editor, next) => {
      const children = next();
      return React.createElement(React.Fragment, null, React.createElement("div", {
        onClick: e => e.stopPropagation()
      }, React.createElement(Component, {
        editor: editor,
        delay: menuPos - 1
      })), children);
    }
  };
}