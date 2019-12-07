export default function getStartIndex(nodes, id) {
  const listNodes = nodes.filter(node => node.type === 'list' && node.numbered);
  const index = listNodes.findIndex(node => node.id === id);

  if (index === 0) {
    return 1;
  }

  const lastNode = listNodes[index - 1];
  const size = lastNode.value.document.nodes.size + 1;

  if (!lastNode.linked) {
    return size;
  }

  return getStartIndex(nodes, lastNode.id) + size;
}
