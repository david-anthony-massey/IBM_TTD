const { primeFactorizer } = require('../primeFactorizer');
const expect = require('chai').expect;

describe.only(`isPrime test suite`, () => {
  describe(`isPrime canary spec`, () => {
    it('shows the infrastructure works', () => {
      expect(true).to.be.true;
    });
  });
  describe(`primeFactorizer correctly outputs all prime factors`, () => {
    it('for 1 return []', () => {
      expect(primeFactorizer(1)).to.deep.equal([]);
    });
    it('for 2 return [2]', () => {
      expect(primeFactorizer(2)).to.deep.equal([2]);
    });
    it('for 4 return [2,2]', () => {
      expect(primeFactorizer(4)).to.deep.equal([2, 2]);
    });
    it('for 5 return [5]', () => {
      expect(primeFactorizer(5)).to.deep.equal([5]);
    });
    it('for 6 return [2,3]', () => {
      expect(primeFactorizer(6)).to.deep.equal([2, 3]);
    });
    it('for 7 return [7]', () => {
      expect(primeFactorizer(7)).to.deep.equal([7]);
    });
    it('for 8 return [2,2,2]', () => {
      expect(primeFactorizer(8)).to.deep.equal([2, 2, 2]);
    });
  });
});
