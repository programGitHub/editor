export default function(type) {
  return function(editor, data) {
    editor.wrapInline({
      type,
      data
    });

    editor.moveToEnd();
  };
}
