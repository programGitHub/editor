export default function (type) {
  return function (editor, data) {
    editor.insertInline({
      type,
      data
    });
    editor.moveForward();
  };
}