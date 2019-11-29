export default function (type) {
  return function (editor) {
    return editor.value.inlines.some(inline => inline.type === type);
  };
}