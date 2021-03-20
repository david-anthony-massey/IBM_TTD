const stackDemoFactory = () => {
  let empty = true;
  let count = 0;
  return {
    isEmpty: () => count === 0,
    size: () => count,
    push: () => {
      empty = false;
      count += 1;
    },
    pop: () => {
      empty = true;
      count -= 1;
    },
  };
};

const stackDemo = stackDemoFactory();

module.exports = { stackDemo, stackDemoFactory };
