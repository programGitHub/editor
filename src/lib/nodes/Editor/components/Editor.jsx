import React, { useRef } from 'react';
import { Editor as SlateEditor } from 'slate-react';
import { Menu, MenuBox } from 'lib/components/Cell';
import plugins from '../plugins';

export const EditorContext = React.createContext({ menu: {} });

/**
 * Editor
 */
const Editor = props => {
  const ref = useRef(null);

  return (
    <EditorContext.Provider value={{ menu: ref }}>
      <SlateEditor {...props} placeholder="Enter some text" plugins={plugins} />
      <Menu>
        <MenuBox ref={ref} />
      </Menu>
    </EditorContext.Provider>
  );
};

export default Editor;
