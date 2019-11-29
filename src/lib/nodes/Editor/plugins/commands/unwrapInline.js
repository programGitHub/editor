export default function(type) {
  return function(editor) {
    editor.unwrapInline(type);
  };
}
