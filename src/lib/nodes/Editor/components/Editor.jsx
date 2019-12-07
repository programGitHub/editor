import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Editor as SlateEditor } from 'slate-react';
import { Menu, MenuBox } from 'lib/components/Cell';
import createPlugins from '../plugins';

export const EditorContext = React.createContext({ menu: {} });

/**
 * Editor
 */
const Editor = ({ plugins, ...props }) => {
  const ref = useRef(null);
  const plugs = useMemo(() => createPlugins(plugins), [plugins]);

  return (
    <EditorContext.Provider value={{ menu: ref }}>
      <SlateEditor {...props} placeholder="Enter some text" plugins={plugs} />
      <Menu>
        <MenuBox ref={ref} />
      </Menu>
    </EditorContext.Provider>
  );
};

Editor.defaultProps = {
  plugins: ['paragraph', 'bold', 'link', 'formula']
};

Editor.propTypes = {
  plugins: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired
};

export default Editor;
