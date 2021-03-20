const stackDemoFactory = () => {
  let empty = true;
  let count = 0;
  return {
    isEmpty: () => empty,
    size: () => count,
    push: () => {
      empty = false;
      count += 1;
    },
    pop: () => {
      empty = true;
    },
  };
};

const stackDemo = stackDemoFactory();

module.exports = { stackDemo, stackDemoFactory };
