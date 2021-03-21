const stackDemoFactory = () => {
  let count = 0;
  let element;
  return {
    isEmpty: () => count === 0,
    size: () => count,
    push: ele => {
      if (count === 2) throw new Error('capacity overflow error');
      count += 1;
      element = ele;
    },
    pop: () => {
      if (count === 0) throw new Error('capacity underflow error');
      count -= 1;
      return element;
    },
  };
};

const stackDemo = stackDemoFactory();

module.exports = { stackDemo, stackDemoFactory };
