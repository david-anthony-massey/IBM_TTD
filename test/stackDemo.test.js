const { stackDemoFactory } = require('../stackDemo');
const expect = require('chai').expect;

describe(`stackDemo test suite`, () => {
  describe(`stackDemo canary spec`, () => {
    it('shows the infrastructure works', () => {
      expect(true).to.be.true;
    });
  });

  describe(`stackDemo has properties of a stack`, () => {
    beforeEach(() => {
      stackDemo = stackDemoFactory();
    });
    it('starts empty', () => {
      expect(stackDemo.isEmpty()).to.be.true;
    });
    it('starts with stack size of 0', () => {
      expect(stackDemo.size()).to.equal(0);
    });
    it('is not empty when pushed', () => {
      stackDemo.push();
      expect(stackDemo.isEmpty()).to.be.false;
    });
    it('stack size is 1 when pushed', () => {
      stackDemo.push();
      expect(stackDemo.size()).to.equal(1);
    });
    it('stack is empty when pushed and popped', () => {
      stackDemo.push();
      stackDemo.pop();
      expect(stackDemo.isEmpty()).to.be.true;
    });
    it('stack size is 0 when pushed and popped', () => {
      stackDemo.push();
      stackDemo.pop();
      expect(stackDemo.size()).to.equal(0);
    });
    it('throws overflow error when pushing to a stack at full capacity', () => {
      stackDemo.push();
      stackDemo.push();
      expect(() => {
        stackDemo.push();
      }).to.throw('capacity overflow error');
    });
    it('throw underflow error when popping an empty stack', () => {
      expect(() => {
        stackDemo.pop();
      }).to.throw('capacity underflow error');
    });
    it('pops the same one item when pushed');
    it('pops two items with the most recent first');
    it('accepts only a positive capacity');
  });
});
