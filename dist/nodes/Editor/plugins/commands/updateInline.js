export default function () {
  return function (editor, node, update) {
    editor.setNodeByKey(node.key, { ...node.toJS(),
      data: { ...node.data.toJS(),
        ...update
      }
    });
  };
}