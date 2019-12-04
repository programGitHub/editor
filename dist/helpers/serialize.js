function general(node) {
  return {
    id: node.id,
    type: node.type
  };
}

export default function (plugins) {
  return function (nodes) {
    return nodes.map(node => {
      try {
        const pluginEntry = plugins.find(({
          type: pluginType
        }) => pluginType === node.type);

        if (!pluginEntry) {
          throw new Error(`Plugin of type ${node.type} was not found. [${plugins.map(p => p.type).join(',')}]`);
        }

        const {
          plugin
        } = pluginEntry;

        if (!Object.hasOwnProperty.call(plugin, 'serialize')) {
          throw new Error(`Plugin of type ${node.type} has no serialize function.`);
        }

        return { ...plugin.serialize(node),
          ...general(node)
        };
      } catch (e) {
        console.log(e);
        return { ...general(node)
        };
      }
    });
  };
}