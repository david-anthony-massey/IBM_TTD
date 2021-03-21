const stackDemoFactory = (capacity = 2) => {
  if (capacity < 1) throw new Error('invalid capacity');
  let elements = [];
  return {
    isEmpty: () => elements.length === 0,
    size: () => elements.length,
    push: element => {
      if (elements.length === capacity) throw new Error('capacity overflow error');
      elements.push(element);
    },
    pop: () => {
      if (elements.length === 0) throw new Error('capacity underflow error');
      return elements.pop();
    },
  };
};

const stackDemo = stackDemoFactory();

module.exports = { stackDemo, stackDemoFactory };
