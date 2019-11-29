export default {
  inlines: {
    formula: {
      isVoid: true,
      data: {
        math: str => typeof str === 'string' && str.length
      }
    }
  }
};