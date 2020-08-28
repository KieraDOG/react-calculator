const operate = (input) => input
  .reduce((a, b) => {
    if (typeof a === 'function') {
      return a(+b);
    }

    return b(+a);
  }, (v) => v);

export default operate;
