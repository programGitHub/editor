import React from 'react';

export default function(Component, menuPos) {
  return {
    renderEditor: (_, editor, next) => {
      const children = next();

      return (
        <React.Fragment>
          <div onClick={e => e.stopPropagation()}>
            <Component editor={editor} delay={menuPos - 1} />
          </div>
          {children}
        </React.Fragment>
      );
    }
  };
}
