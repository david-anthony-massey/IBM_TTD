const stackDemoFactory = () => {
  let count = 0;
  return {
    isEmpty: () => count === 0,
    size: () => count,
    push: () => {
      if (count === 2) throw new Error('capacity overflow error');
      count += 1;
    },
    pop: () => {
      count -= 1;
    },
  };
};

const stackDemo = stackDemoFactory();

module.exports = { stackDemo, stackDemoFactory };
