import React from 'react';
export default function (type, Component) {
  return {
    renderBlock: (props, _, next) => {
      const {
        node
      } = props;

      if (node.type !== type) {
        return next();
      }

      return React.createElement(Component, props);
    }
  };
}