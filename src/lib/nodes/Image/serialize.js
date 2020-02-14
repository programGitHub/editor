export default function(value) {
  return {
    ...value,
    src: value.src,
    width: value.width || 30
  };
}
