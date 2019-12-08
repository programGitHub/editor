function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Editor as SlateEditor } from 'slate-react';
import { Menu, MenuBox } from '../../../components/Cell';
import createPlugins from '../plugins';
export const EditorContext = React.createContext({
  menu: {}
});
/**
 * Editor
 */

const Editor = ({
  plugins,
  ...props
}) => {
  const ref = useRef(null);
  const plugs = useMemo(() => createPlugins(plugins), [plugins]);
  return React.createElement(EditorContext.Provider, {
    value: {
      menu: ref
    }
  }, React.createElement(SlateEditor, _extends({}, props, {
    placeholder: "Enter some text",
    plugins: plugs
  })), React.createElement(Menu, null, React.createElement(MenuBox, {
    ref: ref
  })));
};

Editor.defaultProps = {
  plugins: ['paragraph', 'bold', 'link', 'formula']
};
Editor.propTypes = {
  plugins: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired
};
export default Editor;