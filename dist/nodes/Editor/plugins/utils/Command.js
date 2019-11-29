export default function (label, cmd) {
  return {
    commands: {
      [label]: cmd
    }
  };
}