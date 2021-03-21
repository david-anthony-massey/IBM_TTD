const stackDemoFactory = () => {
  let elements = [];
  return {
    isEmpty: () => elements.length === 0,
    size: () => elements.length,
    push: element => {
      if (elements.length === 2) throw new Error('capacity overflow error');
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
