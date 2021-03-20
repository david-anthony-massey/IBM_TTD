const stackDemoFactory = () => {
  let empty = true;
  return {
    isEmpty: () => empty,
    size: () => 0,
    push: () => {
      empty = false;
    },
  };
};

const stackDemo = stackDemoFactory();

module.exports = { stackDemo };
