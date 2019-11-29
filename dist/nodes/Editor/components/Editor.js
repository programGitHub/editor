function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef } from 'react';
import { Editor as SlateEditor } from 'slate-react';
import { Menu, MenuBox } from 'lib/components/Cell';
import plugins from '../plugins';
export const EditorContext = React.createContext({
  menu: {}
});
/**
 * Editor
 */

const Editor = props => {
  const ref = useRef(null);
  return React.createElement(EditorContext.Provider, {
    value: {
      menu: ref
    }
  }, React.createElement(SlateEditor, _extends({}, props, {
    placeholder: "Enter some text",
    plugins: plugins
  })), React.createElement(Menu, null, React.createElement(MenuBox, {
    ref: ref
  })));
};

export default Editor;