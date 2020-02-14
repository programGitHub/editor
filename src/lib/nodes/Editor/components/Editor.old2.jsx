import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import createPlugins from '../plugins';
import { Editor as SlateEditor } from 'slate-react';
import { MenuBox } from 'lib/components/Cell';

export const EditorContext = React.createContext({ menu: {} });

/**
 * Editor
 */
const Editor = ({ children, plugins, ...props }) => {
  const editor = useRef(null);
  const [slatePlugins, menus] = useMemo(() => {
    const plugs = createPlugins(plugins);
    return [
      plugs.map(e => e.slate),
      editor.current
        ? plugs
            .filter(e => Object.hasOwnProperty.call(e, 'menu'))
            .map(e => e.menu(editor.current))
        : null
    ];
  }, [plugins]);

  return (
    <React.Fragment>
      <SlateEditor
        {...props}
        placeholder="Enter some text"
        plugins={slatePlugins}
        ref={editor}
      />
      {children(<MenuBox>{menus}</MenuBox>)}
    </React.Fragment>
  );
};

Editor.defaultProps = {
  children: function() {},
  plugins: ['paragraph', 'bold', 'link', 'formula']
};

Editor.propTypes = {
  children: PropTypes.func.isRequired,
  plugins: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired
};

export default Editor;
