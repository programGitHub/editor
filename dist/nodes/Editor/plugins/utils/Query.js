export default function (label, cmd) {
  return {
    queries: {
      [label]: cmd
    }
  };
}