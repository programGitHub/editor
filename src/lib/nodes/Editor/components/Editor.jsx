import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

/**
 * Editor
 */
const Editor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'test',
      children: [{ text: 'A line of text in a paragraph.' }]
    }
  ]);

  return (
    <Slate editor={editor} onChange={v => setValue(v)} value={value}>
      <Editable />
    </Slate>
  );
};

export default Editor;
