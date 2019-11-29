import React from 'react';

export default function(type, Component) {
  return {
    renderInline: (props, _, next) => {
      const { node } = props;

      if (node.type !== type) {
        return next();
      }

      return <Component {...props} {...node.data.toJS()} />;
    }
  };
}
